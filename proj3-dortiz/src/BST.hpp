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

/** Binary search tree used to count distinct normalized words. */
class BinSearchTree {
  public:
    BinSearchTree() = default;
    ~BinSearchTree(); // calls destroy(root_)

    /// Inserts a word, incrementing its count if it already exists.
    void insert(const std::string& word);

    /// Inserts every word in the supplied sequence.
    void bulkInsert(const std::vector<std::string>& words);
    
    /// Returns whether the word exists in the tree.
    [[nodiscard]] bool member(std::string_view word) const;
    
    /// Returns a word's frequency, or zero when it is absent.
    [[nodiscard]] int countOf(std::string_view word) const;
    
    /// Appends `(word, frequency)` pairs in lexicographic order.
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
