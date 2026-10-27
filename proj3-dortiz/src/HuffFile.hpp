#pragma once

#include <array>
#include <cstdint>
#include <string>
#include <vector>

bool writeHuffFile(
    const std::string& outputFileName,
    const std::array<std::uint64_t, 256>& frequencies,
    const std::vector<unsigned char>& compressedData,
    std::uint64_t originalSize
);