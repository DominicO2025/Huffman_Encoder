#include "crow.h"
#include "Encoder.hpp"

#include <filesystem>
#include <fstream>
#include <string>
#include <iterator>
#include <chrono>
#include <atomic>
#include <cstdint>
#include <system_error>

namespace fs = std::filesystem;

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/api/encode")
    .methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {

        // 1. Validate uploaded content
        if (req.body.empty()) {
            return crow::response(400, "File is empty");
        }

        if (req.body.size() > 5 * 1024 * 1024) {
            return crow::response(413, "File is too large");
        }

        // 2. Create a unique temporary directory
        static std::atomic<std::uint64_t> counter{0};

        auto id = std::to_string(
            std::chrono::steady_clock::now()
                .time_since_epoch().count()
        ) + "_" + std::to_string(counter++);

        fs::path tempDir =
            fs::temp_directory_path() / ("huffman_" + id);

        std::error_code ec;

        if (!fs::create_directory(tempDir, ec)) {
            return crow::response(500, "Cannot create temporary directory");
        }

        // 3. Save the uploaded text
        fs::path prefix = tempDir / "upload";
        fs::path inputPath = tempDir / "upload.txt";

        std::ofstream input(inputPath, std::ios::binary);

        if (!input) {
            fs::remove_all(tempDir, ec);
            return crow::response(500, "Cannot create input file");
        }

        input.write(req.body.data(),
                    static_cast<std::streamsize>(req.body.size()));
        input.close();

        if (!input) {
            fs::remove_all(tempDir, ec);
            return crow::response(500, "Cannot write input file");
        }

        // 4. Run the Huffman encoder
        bool success = encodeFile(prefix.string());

        if (!success) {
            fs::remove_all(tempDir, ec);
            return crow::response(500, "Encoding failed");
        }

        // 5. Read the encoded output
        fs::path outputPath = tempDir / "upload.code";

        std::ifstream output(outputPath, std::ios::binary);

        if (!output) {
            fs::remove_all(tempDir, ec);
            return crow::response(500, "Cannot read encoded file");
        }

        std::string encoded(
            (std::istreambuf_iterator<char>(output)),
            std::istreambuf_iterator<char>()
        );

        if (output.bad()) {
            fs::remove_all(tempDir, ec);
            return crow::response(500, "Cannot read encoded file");
        }

        output.close();

        // 6. Remove temporary files
        fs::remove_all(tempDir, ec);

        // 7. Return encoded data to React
        crow::response response(200, encoded);
        response.set_header("Content-Type", "text/plain");
        return response;
    });

    app.port(8080).run();
}