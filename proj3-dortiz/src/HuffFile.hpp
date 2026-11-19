#pragma once

#include <array>
#include <cstdint>
#include <string>
#include <vector>

/**
 * Writes the version 1 Huffman container format.
 *
 * Layout: `HUFF`, one-byte version, original size, 256 little-endian
 * uint64_t frequencies, and the packed payload bytes.
 */
bool writeHuffFile(
    const std::string& outputFileName,
    const std::array<std::uint64_t, 256>& frequencies,
    const std::vector<unsigned char>& compressedData,
    std::uint64_t originalSize
);
