#include "ByteHuffman.hpp"
#include "HuffFile.hpp"

#include <array>
#include <string>
#include <cstdint>
#include <fstream>
#include <vector>
#include <iterator>
#include <queue>
#include <memory>
#include <iostream>
#include <bitset>

struct ByteNode {
    unsigned char byte;
    std::uint64_t frequency;
    std::uint16_t minByte;

    ByteNode* left = nullptr;
    ByteNode* right = nullptr;

    ByteNode(unsigned char b, std::uint64_t freq)
        : byte(b), frequency(freq), minByte(b) {}
};

struct CompareNodes {
    bool operator()(const ByteNode* a, const ByteNode* b) const {
        if (a->frequency == b->frequency) {
            return a->minByte > b->minByte;
        }

        return a->frequency > b->frequency;
    }
};

void generateCodes(const ByteNode* node, const std::string& currentCode, std::array<std::string, 256>& codes) {
    if (node == nullptr) {
        return;
    }

    // Base case: We reached a leaf node
    if (node->left == nullptr && node->right == nullptr) {
        codes[node->byte] = currentCode.empty() ? "0" : currentCode;
        return;
    }

    // Traverse left (0)
    generateCodes(node->left, currentCode + "0", codes);

    // Traverse right (1)
    generateCodes(node->right, currentCode + "1", codes);


}

bool encodeBytes(const std::string& inputFileName) {

    // Opens file
    std::ifstream input(inputFileName, std::ios::binary);

    if (!input) {
        return false;
    }

    // Reads every byte
    std::vector<unsigned char> data{
        std::istreambuf_iterator<char>(input),
        std::istreambuf_iterator<char>()
    };

    if (input.bad()) {
        return false;
    }

    // Counts byte frequencies
    std::array<std::uint64_t, 256> frequencies{};

    for (unsigned char byte : data) {
        frequencies[byte]++;
    }

    std::priority_queue<ByteNode*, std::vector<ByteNode*>, CompareNodes> pq;

    std::vector<std::unique_ptr<ByteNode>> nodes;

    // Creates leaf nodes for bytes in file
    for (int i = 0; i < 256; i++) {
        if (frequencies[i] > 0) {
            auto node = std::make_unique<ByteNode>(
                static_cast<unsigned char>(i),
                frequencies[i]
            );

            pq.push(node.get());
            nodes.push_back(std::move(node));
        }
    }

    // Combine the two least frequent nodes
    while (pq.size() > 1) {
        ByteNode* left = pq.top();
        pq.pop();

        ByteNode* right = pq.top();
        pq.pop();

        auto parent = std::make_unique<ByteNode>(0, left->frequency + right->frequency);

        parent->minByte = std::min(left->minByte, right->minByte);

        parent->left = left;
        parent->right = right;

        pq.push(parent.get());
        nodes.push_back(std::move(parent));
    }

    // Root of the completed Huffman tree
    ByteNode* root = pq.empty() ? nullptr : pq.top();

    // Generate Huffman codes
    std::array<std::string, 256> codes{};
    generateCodes(root, "", codes);

    // Pack the bits into bytes
    std::vector<unsigned char> compressedData;
    unsigned char currentByte = 0;
    int bitCount = 0;

    for (unsigned char byte : data) {
        const std::string& code = codes[byte];

        for (char bit : code) {
            currentByte <<= 1;

            if (bit == '1') {
                currentByte |= 1;
            }

            bitCount++;

            if (bitCount == 8) {
                compressedData.push_back(currentByte);
                currentByte = 0;
                bitCount = 0;
            }
        }
    }

    // Handle remaining bits
    if (bitCount > 0) {
        currentByte <<= (8 - bitCount);
        compressedData.push_back(currentByte);
    }

    // Create output filename
    std::string outputFileName = inputFileName + ".huff";

    // Write compressed file
    bool success = writeHuffFile(outputFileName, frequencies, compressedData, static_cast<std::uint64_t>(data.size()));

    if (!success) {
        return false;
    }

    // Print the packed bytes
    std::cout << "Packed binary output:\n";

    for (unsigned char byte : compressedData) {
        std::cout << std::bitset<8>(byte) << '\n';
    }

    return true;
}