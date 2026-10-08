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

bool customComparison(std::pair<std::string,int> a, std::pair<std::string,int> b){
    // Custom comparison logic
    if(a.second == b.second){
        return a.first < b.first;
    }
    
    return a.second > b.second; 
}

int main(int argc, char *argv[]) {

    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <filename>\n";
        return 1;
    }

    const std::string inputPrefix = std::string(argv[1]);
    const std::string inputFileName = inputPrefix + ".txt";

    // build the path to the .tokens output file.
    const std::string wordTokensFileName = inputPrefix + ".tokens";


    // The next several if-statement make sure that the input file, the directory exist
    // and that the output file is writeable.
     if( error_type status; (status = regularFileExistsAndIsAvailable(inputFileName)) != NO_ERROR )
        exitOnError(status, inputFileName);

    if (error_type status; (status = canOpenForWriting(wordTokensFileName)) != NO_ERROR)
        exitOnError(status, wordTokensFileName);


    std::vector<std::string> words;
    namespace fs = std::filesystem;
    fs::path tokensFilePath(wordTokensFileName); // create a file system path using the output file.

    auto fileToWords = Scanner(inputFileName);
    if( error_type status; (status = fileToWords.tokenize(words)) != NO_ERROR)
	    exitOnError(status, inputFileName);

    if (error_type status; (status = writeVectorToFile(wordTokensFileName, words)) != NO_ERROR)
        exitOnError(status, wordTokensFileName);

    std::vector<std::string> originalWords = words;

    int seed = 123;
    auto rng = std::mt19937(seed);
    std::shuffle(words.begin(), words.end(), rng);

    BinSearchTree bst;
    bst.bulkInsert(words);

    std::vector<std::pair<std::string,int>> freqVec;
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

    HuffmanTree htree(freqVec);

    //make for header file
    std::string hdrFileName = (dir / (base + ".hdr")).string();
    std::ofstream hdrOut(hdrFileName);

    htree.writeHeader(hdrOut);
    hdrOut.close();

    //make for code file
    std::string codeFileName = (dir / (base + ".code")).string();
    std::ofstream codeOut(codeFileName);

    htree.encode(originalWords, codeOut);  
    codeOut.close();

    return 0;
}
