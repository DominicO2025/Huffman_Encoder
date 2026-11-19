#ifndef HUFFMAN_HPP
#define HUFFMAN_HPP

#include <vector>
#include <iostream>
#include <string>
#include <map>
#include "utils.hpp"
#include "BST.hpp"

    struct CustomHeapComp {
        bool operator()(TreeNode* const& a, TreeNode* const& b) const {
            if (a->count == b->count) {
                return a->word > b->word;
            }
            return a->count > b->count;
        }
    };

class HuffmanTree {
  public:

    /// Builds a tree from `(word, frequency)` pairs.
    HuffmanTree(const std::vector<std::pair<std::string,int>>& counts);
    HuffmanTree() = default;
    ~HuffmanTree(); // deletes the entire Huffman tree

    /// Writes one `word code` entry for each leaf.
    error_type writeHeader(std::ostream& os) const;

    
    /// Writes ASCII `0`/`1` codes for the tokens, wrapping long lines.
    error_type encode(const std::vector<std::string>& tokens, std::ostream& os_bits,
        int wrap_cols = 80) const;

  private:

    TreeNode* root_ = nullptr; // owns the full Huffman tree

    // helpers -- add more as needed
    void destroy(TreeNode* n);
    void writeHeaderPreorder(const TreeNode* n, std::ostream& os, std::string prefix) const;
};
 

#endif
