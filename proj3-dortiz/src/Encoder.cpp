#include "Encoder.hpp"

#include <iostream>
#include <fstream>
#include <filesystem>
#include <string>
#include <vector>
#include <random>
#include <algorithm>
#include <iomanip>

#include "Scanner.hpp"
#include "utils.hpp"
#include "BST.hpp"
#include "Huffman.hpp"

bool customComparison(
    std::pair<std::string, int> a,
    std::pair<std::string, int> b
) {
    if (a.second == b.second) {
        return a.first < b.first;
    }

    return a.second > b.second;
}

void encodeFile(const std::string& inputPrefix) {

    const std::string inputFileName = inputPrefix + ".txt";
    const std::string wordTokensFileName = inputPrefix + ".tokens";

    if (error_type status;
        (status = regularFileExistsAndIsAvailable(inputFileName)) != NO_ERROR)
        exitOnError(status, inputFileName);

    if (error_type status;
        (status = canOpenForWriting(wordTokensFileName)) != NO_ERROR)
        exitOnError(status, wordTokensFileName);

    std::vector<std::string> words;

    namespace fs = std::filesystem;

    auto fileToWords = Scanner(inputFileName);

    if (error_type status;
        (status = fileToWords.tokenize(words)) != NO_ERROR)
        exitOnError(status, inputFileName);

    if (error_type status;
        (status = writeVectorToFile(wordTokensFileName, words)) != NO_ERROR)
        exitOnError(status, wordTokensFileName);

    std::vector<std::string> originalWords = words;

    int seed = 123;
    auto rng = std::mt19937(seed);
    std::shuffle(words.begin(), words.end(), rng);

    BinSearchTree bst;
    bst.bulkInsert(words);

    std::vector<std::pair<std::string, int>> freqVec;
    bst.inorderCollect(freqVec);

    std::sort(freqVec.begin(), freqVec.end(), customComparison);

    fs::path inputPath(inputFileName);
    fs::path dir = inputPath.parent_path();
    std::string base = inputPath.stem().string();

    std::string freqFileName = (dir / (base + ".freq")).string();

    std::ofstream freqOut(freqFileName);

    for (auto& p : freqVec) {
        freqOut << std::setw(10) << p.second << " " << p.first << "\n";
    }

    freqOut.close();

    std::string hdrFileName = (dir / (base + ".hdr")).string();
    std::ofstream hdrOut(hdrFileName);

    HuffmanTree htree(freqVec);

    htree.writeHeader(hdrOut);
    hdrOut.close();

    std::string codeFileName = (dir / (base + ".code")).string();
    std::ofstream codeOut(codeFileName);

    htree.encode(originalWords, codeOut);
    codeOut.close();
}