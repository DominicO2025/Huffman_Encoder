//
// Created by Ali Kooshesh on 9/27/25.
//

#ifndef IMPLEMENTATION_FILETOWORDS_HPP
#define IMPLEMENTATION_FILETOWORDS_HPP
#include <string>
#include <vector>

#include <filesystem>

#include "utils.hpp"

class Scanner {
public:
    explicit Scanner(std::filesystem::path inputPath);

    /** Reads the input file and appends normalized word tokens to `words`. */
    error_type tokenize(std::vector<std::string>& words);

    ~Scanner() = default;

private:
    /**
     * Reads one word, lowercases ASCII letters, and allows internal
     * apostrophes. Separators and non-ASCII bytes are discarded.
     */
    std::string readWord(std::istream& in);
    

    std::filesystem::path inputPath_;
};

#endif //IMPLEMENTATION_FILETOWORDS_HPP
