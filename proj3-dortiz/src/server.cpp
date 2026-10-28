#include "crow.h"
#include "ByteHuffman.hpp"
#include "ByteDecoder.hpp"

#include <filesystem>
#include <fstream>
#include <string>
#include <iterator>
#include <atomic>
#include <chrono>
#include <cstdint>
#include <system_error>
#include <memory>
#include <stdexcept>

namespace fs = std::filesystem;

// Create a temporary workspace for each request
struct TempWorkspace {
    fs::path directory;

    TempWorkspace() {
        static std::atomic<std::uint64_t> counter{0};

        for (int attempt = 0; attempt < 10; ++attempt) {
            auto id = std::to_string(
                std::chrono::steady_clock::now()
                    .time_since_epoch().count()
            ) + "_" + std::to_string(counter++);

            directory = fs::temp_directory_path() /
                        ("huffman_" + id);

            std::error_code ec;
            if (fs::create_directory(directory, ec)) {
                return;
            }
        }

        throw std::runtime_error("Cannot create temporary workspace");
    }

    ~TempWorkspace() {
        std::error_code ec;
        fs::remove_all(directory, ec);
    }
};

// Write the uploaded file
bool saveFile(const fs::path& path, const std::string& data) {
    std::ofstream output(path, std::ios::binary);

    if (!output) return false;

    output.write(data.data(),
                 static_cast<std::streamsize>(data.size()));

    output.close();
    return output.good();
}

// Read the generated file
bool readFile(const fs::path& path, std::string& data) {
    std::ifstream input(path, std::ios::binary);

    if (!input) return false;

    data.assign(
        std::istreambuf_iterator<char>(input),
        std::istreambuf_iterator<char>()
    );

    return !input.bad();
}

int main() {
    crow::SimpleApp app;

    // ENCODE
    CROW_ROUTE(app, "/api/encode")
    .methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {
        try {
            if (req.body.size() > 10 * 1024 * 1024) {
                return crow::response(413, "File too large");
            }

            TempWorkspace workspace;

            fs::path inputPath = workspace.directory / "upload.txt";
            fs::path outputPath = workspace.directory / "upload.txt.huff";

            if (!saveFile(inputPath, req.body)) {
                return crow::response(500, "Failed to save upload");
            }

            if (!encodeBytes(inputPath.string())) {
                return crow::response(500, "Encoding failed");
            }

            std::string result;
            if (!readFile(outputPath, result)) {
                return crow::response(500, "Failed to read compressed file");
            }

            crow::response response(200, result);
            response.set_header(
                "Content-Type", "application/octet-stream"
            );
            return response;

        } catch (const std::exception&) {
            return crow::response(500, "Internal server error");
        }
    });

    // DECODE
    CROW_ROUTE(app, "/api/decode")
    .methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {
        try {
            if (req.body.size() > 10 * 1024 * 1024) {
                return crow::response(413, "File too large");
            }

            TempWorkspace workspace;

            fs::path inputPath = workspace.directory / "upload.huff";
            fs::path outputPath = workspace.directory / "restored.txt";

            if (!saveFile(inputPath, req.body)) {
                return crow::response(500, "Failed to save upload");
            }

            if (!decodeBytes(
                    inputPath.string(),
                    outputPath.string())) {
                return crow::response(400, "Invalid Huffman file");
            }

            std::string result;
            if (!readFile(outputPath, result)) {
                return crow::response(500, "Failed to read decoded file");
            }

            crow::response response(200, result);
            response.set_header(
                "Content-Type", "application/octet-stream"
            );
            return response;

        } catch (const std::exception&) {
            return crow::response(500, "Internal server error");
        }
    });

    app.port(8080).run();
}