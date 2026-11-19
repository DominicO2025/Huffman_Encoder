#include "HuffFile.hpp"

#include <fstream>
#include <cstdint>

bool writeHuffFile(const std::string& outputFileName, const std::array<std::uint64_t, 256>& frequencies, const std::vector<unsigned char>& compressedData, std::uint64_t originalSize) {
    // All fields are written in binary mode so no newline translation occurs.
    std::ofstream output(outputFileName, std::ios::binary);

    if (!output) {
        return false;
    }

    // Four bytes identify this as a Huffman file before any numeric fields.
    output.write("HUFF", 4);

    // Version 1 is the current header/payload contract.
    output.put(static_cast<char>(1));

    // Explicit little-endian serialization keeps the format portable.
    auto writeUint64 = [&output](std::uint64_t value) {
        for (int i = 0; i < 8; ++i) {
            output.put(static_cast<char>(value & 0xFF));
            value >>= 8;
        }
    };

    // The decoder uses this to ignore padding bits in the last payload byte.
    writeUint64(originalSize);

    // A fixed table makes the format simple, at the cost of a 2,048-byte
    // header even when only a few byte values occur.
    for (std::uint64_t frequency : frequencies) {
        writeUint64(frequency);
    }

    // Payload bytes already contain MSB-first packed Huffman bits.
    if (!compressedData.empty()) {
        output.write(
            reinterpret_cast<const char*>(compressedData.data()),
            static_cast<std::streamsize>(compressedData.size())
        );
    }

    // Closing before checking catches buffered write failures.
    output.close();

    return output.good();
}
