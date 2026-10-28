#include <iostream>
#include "Encoder.hpp"

int main(int argc, char* argv[]) {

    if (argc != 2) {
        std::cerr << "Usage: "
                  << argv[0]
                  << " <filename>\n";

        return 1;
    }

    encodeFile(argv[1]);

    return 0;
}