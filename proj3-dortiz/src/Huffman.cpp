#include "Huffman.hpp"
#include "BST.hpp"

#include <utility>
#include <iostream>
#include <fstream>
#include <algorithm>
#include <queue>
#include <functional>

#include "utils.hpp"

using namespace std;

    // Build from BST output (lexicographic vector of (word, count)).
    HuffmanTree::HuffmanTree(const std::vector<std::pair<std::string,int>>& counts){

        std::priority_queue<TreeNode*, vector<TreeNode*>, CustomHeapComp> pq;
        
        for(size_t i = 0; i < counts.size(); ++i){
            TreeNode* node = new TreeNode(counts[i].first);

            node->count = counts[i].second; 

            pq.push(node);
        }

        while(pq.size() > 1){
            TreeNode* a = pq.top();
            pq.pop(); 

            TreeNode* b = pq.top();
            pq.pop(); 

            TreeNode* node = new TreeNode(std::min(a->word, b->word));

            node->count = a->count + b->count;

            node->left = a;
            node->right = b;
            
            pq.push(node);

        }

        root_ = pq.empty() ? nullptr : pq.top();
}



    HuffmanTree::~HuffmanTree() {
        destroy(root_);
    }
 
    void HuffmanTree::destroy(TreeNode* n) {
        if (n == nullptr) {
            return;
        }
        destroy(n->left);
        destroy(n->right);
        delete n;
    }
        
    
    void HuffmanTree::writeHeaderPreorder(const TreeNode* node, std::ostream& os, std::string prefix) const {
        if (node == nullptr) {
            return;
        }

        if (node->left == nullptr && node->right == nullptr) {
            std::string code = prefix.empty() ? "0" : prefix;
            os << node->word << " " << code << '\n';
            return;
        }

        writeHeaderPreorder(node->left, os, prefix + "0");
        writeHeaderPreorder(node->right, os, prefix + "1");
    }

    // Header writer (pre-order over leaves; "word<space>code"; newline at end).
    error_type HuffmanTree::writeHeader(std::ostream& os) const {
        writeHeaderPreorder(root_, os, "");
        return NO_ERROR;
    }

    // Encode a sequence of tokens using the codebook derived from this tree.
    // Writes ASCII '0'/'1' and wraps lines to wrap_cols (80 by default).

    error_type HuffmanTree::encode(const std::vector<std::string>& tokens, std::ostream& os_bits,
         int wrap_cols) const {


        std::map<std::string, std::string> codes;

        std::function<void(const TreeNode*, std::string)> visit =
            [&](const TreeNode* node, std::string prefix) {
                if (!node) return;
                if (!node->left && !node->right) {
                    // leaf
                    codes[node->word] = prefix.empty() ? "0" : prefix;
                    return;
                }
                visit(node->left,  prefix + "0");
                visit(node->right, prefix + "1");
            };
        visit(root_, "");

        
        int col = 0;
        for (const auto& token : tokens) {
            const std::string& code = codes.at(token);
            for (char bit : code) {
                os_bits << bit;
                ++col;
                if (col == wrap_cols) {
                    os_bits << '\n';
                    col = 0;
                }
            }
        }
        if (col > 0) os_bits << '\n'; 

        return NO_ERROR;
    }
