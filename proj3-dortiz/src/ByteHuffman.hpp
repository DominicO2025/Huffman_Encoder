#pragma once

#include <string>

/**
 * Compresses a file with byte-oriented Huffman coding.
 *
 * The input is read in binary mode, so the original bytes are preserved
 * exactly. The result is written beside the input as `<input>.huff`.
 * The output contains the original size and byte frequencies, allowing the
 * decoder to rebuild the same Huffman tree.
 *
 * @return true when the file is encoded and written successfully.
 */
bool encodeBytes(const std::string& inputFileName);
