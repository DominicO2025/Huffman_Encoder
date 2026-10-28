#include "ByteDecoder.hpp"
#include <iostream>

int main() {
    if (!decodeBytes("test.txt.huff", "restored.txt")) {
        std::cerr << "Decoding failed\n";
        return 1;
    }

    std::cout << "Decoding successful!\n";
    return 0;
}