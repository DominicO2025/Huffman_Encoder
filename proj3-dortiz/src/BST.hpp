#ifndef BST_HPP
#define BST_HPP


#include <string>
#include <string_view>
#include <vector>
#include <utility>
#include <cstddef>


struct TreeNode {
    std::string word;
    int count;
    TreeNode *left;
    TreeNode *right;
    TreeNode(const std::string& token) : word(token), count(1), left(nullptr), right(nullptr) {}
};

class BinSearchTree {
  public:
    BinSearchTree() = default;
    ~BinSearchTree(); // calls destroy(root_)

    // Insert 'word'; if present, increment its count.
    void insert(const std::string& word);

    // Convenience: loop over insert(word) for each token.
    void bulkInsert(const std::vector<std::string>& words);
    
    // [[nodiscard]] throws an error if this function gets called and the
    // return value is unused
    [[nodiscard]] bool member(std::string_view word) const;
    
    // Return the count associated with a word, or a 0 if it's not in the tree
    [[nodiscard]] int countOf(std::string_view word) const;
    
    // In-order traversal (word-lex order)
    // Populates a list of (word, frequency) pairs
    void inorderCollect(std::vector<std::pair<std::string,int>>& out) const;

    [[nodiscard]] std::size_t size() const; // distinct words
    [[nodiscard]] unsigned height() const; // empty tree = 0
  private:

    // Define TreeNode elsewhere -- see specification
    TreeNode* root_ = nullptr;
    
    // Helpers
    void destroy(TreeNode* node);
    void insertHelper(TreeNode*& node, const std::string& word);
    TreeNode* findNode(TreeNode* node, std::string_view word) const;
    void inorderHelper(const TreeNode* node, std::vector<std::pair<std::string,int>>& out) const;
    std::size_t sizeHelper(const TreeNode* node) const;
    unsigned heightHelper(const TreeNode* node) const;
};


#endif