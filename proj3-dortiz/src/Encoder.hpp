#pragma once

#include <string>

/**
 * Runs the original word-based coursework encoder.
 *
 * `inputPrefix` is used to locate `<inputPrefix>.txt`; the encoder produces
 * human-readable `.tokens`, `.freq`, `.hdr`, and `.code` files. This legacy
 * path tokenizes and lowercases text, so it is not byte-for-byte lossless.
 */
bool encodeFile(const std::string& inputPrefix);
