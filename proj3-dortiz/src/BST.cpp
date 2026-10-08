#include "BST.hpp"

#include <utility>
#include <iostream>
#include <fstream>
#include <algorithm>

#include "utils.hpp"

using namespace std;

    BinSearchTree::~BinSearchTree(){
        destroy(root_);
    } // calls destroy(root_)

    void BinSearchTree::destroy(TreeNode* node){
        if(!node) return; 
        destroy(node->left);   
        destroy(node->right);
        delete node;
    }   

    // Insert 'word'; if present, increment its count.
    void BinSearchTree::insert(const std::string& word){
    if (!root_) {
        root_ = new TreeNode(word);
        return;
    }
        insertHelper(root_, word); 

    }

    void BinSearchTree::insertHelper(TreeNode*& node, const std::string& word){
        if (!node) {
            node = new TreeNode(word);
            return;
        }

        if(node->word == word){
            ++node->count;  
            return; 
        } else if (word < node->word) {
            insertHelper(node->left, word);
        } else if (word > node->word) {
            insertHelper(node->right, word);
        }
    }

    // Convenience: loop over insert(word) for each token.
    void BinSearchTree::bulkInsert(const std::vector<std::string>& words){
        for(size_t i = 0; i < words.size(); ++i){
            insert(words.at(i));
        }
    }
    
    // [[nodiscard]] throws an error if this function gets called and the
    // return value is unused
    [[nodiscard]] bool BinSearchTree::member(std::string_view word) const{
        TreeNode* node = findNode(root_, word);
        
        return  node != nullptr; 
    }

    TreeNode* BinSearchTree::findNode(TreeNode* node, std::string_view word) const{
        if (!node) return nullptr;
        if (word == node->word) return node;

        if (word < node->word) return findNode(node->left, word);
        return findNode(node->right, word);
    }
    
    // Return the count associated with a word, or a 0 if it's not in the tree
    [[nodiscard]] int BinSearchTree::countOf(std::string_view word) const{
        TreeNode* node = findNode(root_, word);
        if(node){
            return node->count; 
        }

        return 0; 
    }
    
    // In-order traversal (word-lex order)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    // Populates a list of (word, frequency) pairs
    void BinSearchTree::inorderCollect(std::vector<std::pair<std::string,int>>& out) const{
        inorderHelper(root_, out);
    }

    void BinSearchTree::inorderHelper(const TreeNode* node, std::vector<pair<std::string,int>>& out) const{
        if (node) {
            inorderHelper(node->left, out);
            out.push_back({node->word, node->count});
            inorderHelper(node->right, out);
        }
    }


    [[nodiscard]] std::size_t BinSearchTree::size() const{ // distinct words
        return sizeHelper(root_);
    }

    std::size_t BinSearchTree::sizeHelper(const TreeNode* node) const{
        if (!node) return 0;

        return sizeHelper(node->left) + sizeHelper(node->right) + 1; 
    }


    [[nodiscard]] unsigned BinSearchTree::height() const{
        return heightHelper(root_);
    }

    unsigned BinSearchTree::heightHelper(const TreeNode* node) const{
        if (!node) return 0;
        return 1 + std::max(heightHelper(node->left), heightHelper(node->right));
    }
     // empty tree = 0