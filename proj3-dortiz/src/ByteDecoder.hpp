#pragma once

#include <string>

/**
 * Restores the original bytes from a version 1 `.huff` file.
 *
 * The decoder validates the file signature, version, and frequency table,
 * rebuilds the encoder's deterministic tree, then follows packed bits until
 * the declared original byte count has been produced.
 *
 * @return true when the input is valid and the output is written successfully.
 */
bool decodeBytes(
    const std::string& inputFileName,
    const std::string& outputFileName
);
