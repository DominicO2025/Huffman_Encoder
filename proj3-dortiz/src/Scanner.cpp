//
// Created by Ali Kooshesh on 9/27/25.
//

#include "Scanner.hpp"

#include <utility>
#include <iostream>
#include <fstream>

#include "utils.hpp"

using namespace std; 

Scanner::Scanner(std::filesystem::path inputPath)
    : inputPath_(std::move(inputPath)) {
}


std::string Scanner::readWord(std::istream& in) {
    std::string token;
    char character;
    bool inToken = false;

    while (in.get(character)) {
        unsigned char currChar = static_cast<unsigned char>(character);

        if (currChar > 127) {
            if (inToken) return token;
            continue;
        }

    
        if (std::isalpha(currChar)) {
            token += static_cast<char>(std::tolower(currChar));
            inToken = true;
        }
        // Apostrophe case
        else if (character == '\'') {
            int next = in.peek();

            if (inToken && next != EOF) {
                unsigned char nextCh = static_cast<unsigned char>(next);

                if (std::isalpha(nextCh)) {
                    token += '\'';
                } else {
                    return token; 
                }
            } else {
                if (inToken) return token;
            }
        }
        else {
            if (inToken) return token;

        }
    }

    // End of file
    if (inToken) return token;

    return "";
}





error_type Scanner::tokenize(std::vector<std::string>& words){
    std::ifstream dataFile(inputPath_);

    if(!dataFile.is_open()){
        return UNABLE_TO_OPEN_FILE; 
    }

    std::string currToken;
   

    while(true){
        
        currToken = readWord(dataFile);

        if(currToken.empty()){
            break;
        }

        words.push_back(currToken);

    }

    return NO_ERROR; 

}
