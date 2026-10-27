#include "HuffFile.hpp"

#include <fstream>
#include <cstdint>

bool writeHuffFile(const std::string& outputFileName, const std::array<std::uint64_t, 256>& frequencies, const std::vector<unsigned char>& compressedData, std::uint64_t originalSize) {
    // 1. Open output file in binary mode
    std::ofstream output(outputFileName, std::ios::binary);

    if (!output) {
        return false;
    }

    // 2. Write file signature
    output.write("HUFF", 4);

    // 3. Write format version
    output.put(static_cast<char>(1));

    // Helper: write a 64-bit integer in little-endian order
    auto writeUint64 = [&output](std::uint64_t value) {
        for (int i = 0; i < 8; ++i) {
            output.put(static_cast<char>(value & 0xFF));
            value >>= 8;
        }
    };

    // 4. Write original file size
    writeUint64(originalSize);

    // 5. Write all 256 byte frequencies
    for (std::uint64_t frequency : frequencies) {
        writeUint64(frequency);
    }

    // 6. Write packed Huffman data
    if (!compressedData.empty()) {
        output.write(
            reinterpret_cast<const char*>(compressedData.data()),
            static_cast<std::streamsize>(compressedData.size())
        );
    }

    // 7. Close and check for errors
    output.close();

    return output.good();
}