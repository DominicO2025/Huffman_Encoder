#include "ByteDecoder.hpp"

#include <array>
#include <cstdint>
#include <fstream>
#include <string>
#include <queue>
#include <vector>
#include <memory>
#include <algorithm>
#include <limits>

struct DecodeNode {
    // This mirrors ByteNode in the encoder. The decoder rebuilds, rather than
    // serializes, the tree from the frequency table in the file header.
    unsigned char byte;
    std::uint64_t frequency;
    std::uint16_t minByte;

    DecodeNode* left = nullptr;
    DecodeNode* right = nullptr;

    DecodeNode(unsigned char b, std::uint64_t freq)
        : byte(b), frequency(freq), minByte(b) {}
};

struct CompareDecodeNodes {
    // Must remain identical to the encoder comparator or equal-frequency
    // inputs could produce incompatible code trees.
    bool operator()(
        const DecodeNode* a,
        const DecodeNode* b
    ) const {
        if (a->frequency == b->frequency) {
            return a->minByte > b->minByte;
        }

        return a->frequency > b->frequency;
    }
};

bool decodeBytes(const std::string& inputFileName, const std::string& outputFileName) {
    std::ifstream input(inputFileName, std::ios::binary);

    if (!input) {
        return false;
    }

    // Reject files that are not this project's container format.
    char magic[4];

    if (!input.read(magic, 4)) {
        return false;
    }

    if (std::string(magic, 4) != "HUFF") {
        return false;
    }

    // Versioning leaves room for future incompatible container formats.
    int version = input.get();

    if (version != 1) {
        return false;
    }

    // The file format fixes integer byte order so files are portable between
    // machines with different native endianness.
    auto readUint64 = [&input](std::uint64_t& value) -> bool {
        value = 0;

        for (int i = 0; i < 8; i++) {
            int byte = input.get();

            if (byte == EOF) {
                return false;
            }

            value |= static_cast<std::uint64_t>(
                static_cast<unsigned char>(byte)
            ) << (i * 8);
        }

        return true;
    };

    // The size is both metadata and the decoder's exact output limit.
    std::uint64_t originalSize = 0;

    if (!readUint64(originalSize)) {
        return false;
    }

    // Frequencies let us reconstruct the same tree without storing codes.
    std::array<std::uint64_t, 256> frequencies{};

    for (auto& frequency : frequencies) {
        if (!readUint64(frequency)) {
            return false;
        }
    }

    // Do not trust the header: its counts must describe exactly originalSize
    // output bytes and must not overflow that declared total.
    std::uint64_t totalFrequency = 0;

    for (std::uint64_t frequency : frequencies) {
        if (frequency > originalSize - totalFrequency) {
            return false;
        }

        totalFrequency += frequency;
    }

    if (totalFrequency != originalSize) {
        return false;
    }

    // Rebuild the same deterministic min-priority queue used by the encoder.
    std::priority_queue<
        DecodeNode*,
        std::vector<DecodeNode*>,
        CompareDecodeNodes
    > pq;

    std::vector<std::unique_ptr<DecodeNode>> nodes;

    // Only bytes with nonzero frequencies belong in the tree.
    for (int i = 0; i < 256; i++) {
        if (frequencies[i] > 0) {
            auto node = std::make_unique<DecodeNode>(
                static_cast<unsigned char>(i),
                frequencies[i]
            );

            pq.push(node.get());
            nodes.push_back(std::move(node));
        }
    }

    // Reconstruct parent nodes in the same left/right order as the encoder.
    while (pq.size() > 1) {
        DecodeNode* left = pq.top();
        pq.pop();

        DecodeNode* right = pq.top();
        pq.pop();

        auto parent = std::make_unique<DecodeNode>(
            0,
            left->frequency + right->frequency
        );

        parent->minByte = std::min(
            left->minByte,
            right->minByte
        );

        parent->left = left;
        parent->right = right;

        pq.push(parent.get());
        nodes.push_back(std::move(parent));
    }

    DecodeNode* root = pq.empty() ? nullptr : pq.top();

    // Binary output preserves the original byte values.
    std::ofstream output(outputFileName, std::ios::binary);

    if (!output) {
        return false;
    }

    // Empty input has no tree or payload, but is still a valid file.
    if (originalSize == 0) {
        output.close();
        return output.good();
    }

    if (root == nullptr) {
        return false;
    }

    // A one-leaf tree has no edges to consume. Repeat its byte directly.
    if (root->left == nullptr && root->right == nullptr) {
        for (std::uint64_t i = 0; i < originalSize; i++) {
            output.put(static_cast<char>(root->byte));

            if (!output) {
                return false;
            }
        }

        output.close();
        return output.good();
    }

    // Walk payload bits from most significant to least significant. Padding
    // is harmless because decoding stops at the declared original size.
    DecodeNode* current = root;
    std::uint64_t decodedCount = 0;

    while (decodedCount < originalSize) {

        int nextByte = input.get();

        if (nextByte == EOF) {
            return false;
        }

        unsigned char packedByte =
            static_cast<unsigned char>(nextByte);

        // Read bits from most significant to least significant
        for (int bitPosition = 7; bitPosition >= 0; bitPosition--) {

            int bit = (packedByte >> bitPosition) & 1;

            if (bit == 0) {
                current = current->left;
            } else {
                current = current->right;
            }

            if (current == nullptr) {
                return false;
            }

            // Reached a leaf node
            if (current->left == nullptr && current->right == nullptr) {

                output.put(static_cast<char>(current->byte));

                if (!output) {
                    return false;
                }

                decodedCount++;

                // Start again at the root
                current = root;

                if (decodedCount == originalSize) {
                    break;
                }
            }
        }
    }

    output.close();

    return output.good();

    return true;
}
