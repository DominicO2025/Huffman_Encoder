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
    // `byte` is meaningful for leaves. Internal nodes use only the aggregate
    // frequency and minByte needed by the priority-queue tie breaker.
    unsigned char byte;
    std::uint64_t frequency;
    std::uint16_t minByte;

    ByteNode* left = nullptr;
    ByteNode* right = nullptr;

    ByteNode(unsigned char b, std::uint64_t freq)
        : byte(b), frequency(freq), minByte(b) {}
};

struct CompareNodes {
    // priority_queue is a max-heap by default, so reverse comparisons make
    // the smallest frequency (then smallest byte) appear at the top.
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

    // A leaf's path from the root is its Huffman code. A single-symbol file
    // has an empty path, so use "0" to give it a usable code.
    if (node->left == nullptr && node->right == nullptr) {
        codes[node->byte] = currentCode.empty() ? "0" : currentCode;
        return;
    }

    // Traverse left (0) and right (1) to extend each path.
    generateCodes(node->left, currentCode + "0", codes);

    // Traverse right (1)
    generateCodes(node->right, currentCode + "1", codes);


}

bool encodeBytes(const std::string& inputFileName) {

    // Read as raw bytes; using text mode would make this platform-dependent.
    std::ifstream input(inputFileName, std::ios::binary);

    if (!input) {
        return false;
    }

    // Keeping the complete input in memory makes the second encoding pass
    // straightforward and keeps the implementation easy to inspect.
    std::vector<unsigned char> data{
        std::istreambuf_iterator<char>(input),
        std::istreambuf_iterator<char>()
    };

    if (input.bad()) {
        return false;
    }

    // The frequency table is stored in the .huff header for the decoder.
    std::array<std::uint64_t, 256> frequencies{};

    for (unsigned char byte : data) {
        frequencies[byte]++;
    }

    std::priority_queue<ByteNode*, std::vector<ByteNode*>, CompareNodes> pq;

    std::vector<std::unique_ptr<ByteNode>> nodes;

    // Create one leaf for each byte that actually occurs.
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

    // Huffman construction: combine the two least-frequent subtrees until
    // only the root remains. The deterministic tie breaker must match the
    // decoder exactly.
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

    // `nodes` owns every node; these raw pointers are only queue/tree links.
    ByteNode* root = pq.empty() ? nullptr : pq.top();

    // Map each possible byte to its root-to-leaf bit string.
    std::array<std::string, 256> codes{};
    generateCodes(root, "", codes);

    // Pack code bits most-significant-bit first. The final byte is padded on
    // the right with zeroes; the original size tells the decoder when to stop.
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

    // Flush a partial byte after left-aligning its remaining bits.
    if (bitCount > 0) {
        currentByte <<= (8 - bitCount);
        compressedData.push_back(currentByte);
    }

    // The container is deliberately adjacent to the source file.
    std::string outputFileName = inputFileName + ".huff";

    // Store the tree recipe (frequencies) and the packed payload.
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
