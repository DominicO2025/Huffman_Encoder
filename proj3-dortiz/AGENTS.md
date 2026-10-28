# AGENTS.md — Huffman Encoder & Decoder

## Mission

Help continue a student-built full-stack Huffman encoder/decoder. Favor **small, explained changes** over broad rewrites. The user is learning React/TypeScript and prefers explicit file locations, line-by-line explanations of unfamiliar syntax, and comparisons with C++ or Python where useful.

## Current handoff (2026-10-26)

**Reported working:**
- Original word-based C++ Huffman encoder and Crow test endpoint.
- New byte-based Huffman encoder: frequency counting, priority queue, deterministic tie-breaking, recursive codes, bit packing, `.huff` writer.
- New byte-based decoder: reads header, rebuilds tree, decodes payload, writes restored bytes.
- Local encode/decode test passed `cmp` (byte-for-byte match).
- CMake configuration/build issue involving target order was fixed; user reported the updated build succeeded.

**Not yet independently verified from the latest checkout:** the final browser-to-Crow-to-byte-encoder/decode download flow. The latest revised source files were not uploaded in the handoff conversation; inspect the actual repository before assuming implementations match the snippets described here.

## Two implementations — do not confuse them

1. **Legacy coursework / word-based path:** `Encoder.cpp/.hpp`, `Scanner.cpp/.hpp`, `BST.cpp/.hpp`, `Huffman.cpp/.hpp`, `utils.cpp/.hpp`, `main.cpp`. It tokenizes words, normalizes case, and does not preserve the exact original text. Keep it working; do not silently replace it.
2. **New lossless byte-based path:** `ByteHuffman.cpp/.hpp`, `ByteDecoder.cpp/.hpp`, `HuffFile.cpp/.hpp`. This is the intended path for the web app. It operates on raw bytes and produces a self-contained `.huff` file.

## Expected integration

- React frontend: `frontend/src/App.tsx`, `frontend/src/components/FileUpload.tsx`.
- Frontend Vite proxy: `/api` -> `http://localhost:8080`.
- Crow C++ server: `src/server.cpp`, port `8080`.
- `POST /api/encode`: raw uploaded bytes -> temporary input file -> `encodeBytes(...)` -> binary `.huff` response.
- `POST /api/decode`: raw `.huff` bytes -> temporary input -> `decodeBytes(input, output)` -> restored bytes as binary response.
- Browser should use `response.blob()`, `URL.createObjectURL`, and a temporary download link, not `response.text()` for binary results.
- Frontend file picker should accept `.txt` and `.huff` and validate the appropriate extension for each operation.
- Avoid trusting client filenames as server paths; use isolated temporary workspaces and clean them up.

## `.huff` version 1 contract

```text
Offset  Size    Field
0       4       ASCII "HUFF"
4       1       version = 1
5       8       original size (uint64, little endian)
13      2048    frequencies[256] (uint64 each, little endian)
2061    rest    packed encoded bytes, MSB-first
```

- Valid payload length is determined by decoding exactly `originalSize` bytes; last byte may contain zero padding.
- The encoder and decoder MUST construct the same tree from the frequency table. The discussed deterministic comparator orders by frequency, then by `minByte` (smallest byte represented in the subtree); each parent updates `minByte = min(left.minByte, right.minByte)`.
- A single unique byte uses a code such as `0`; decoder must handle this special case.
- Empty input needs explicit handling. Verify the current implementation rather than assuming it is complete.
- Any incompatible file format change needs a new version and corresponding encoder/decoder tests.

## Build setup

The backend CMake file is expected to define:

- `huffman_core`: original word-based implementation.
- `byte_huffman_core`: `ByteHuffman.cpp`, `ByteDecoder.cpp`, `HuffFile.cpp`.
- `proj3`: original CLI executable linked to `huffman_core`.
- `huffman_server`: `server.cpp`, linked to `Crow::Crow` and `byte_huffman_core`.
- `test_byte_huffman` and `test_byte_decoder` test executables, linked to `byte_huffman_core`.

**CMake gotcha:** call `add_executable(huffman_server ...)` *before* `target_link_libraries(huffman_server ...)`. Do not edit generated `Makefile`, `CMakeCache.txt`, or `compile_commands.json` directly. Reconfigure using `cmake -S . -B build` after changing CMake targets.

Backend commands (run from backend root):

```bash
cmake -S . -B build
cmake --build build
./build/huffman_server
```

Frontend commands (run from frontend root):

```bash
npm install
npm run dev
```

Test commands (confirm test filenames and working directory):

```bash
cmake --build build --target test_byte_huffman test_byte_decoder
./build/test_byte_huffman
./build/test_byte_decoder
cmp test.txt restored.txt
```

## Next priorities

1. **Verify complete browser flow**: upload `.txt`, encode, download `.huff`, upload `.huff`, decode, download restored text; run `cmp` against original. Inspect DevTools Network and Crow terminal for failures.
2. **Improve UX**: processing indicators, actionable errors, file sizes, compression ratio, correct download filenames; disable invalid operations.
3. **Optimize header**: fixed 2,061-byte header is inefficient for small files. Design a backward-compatible versioned format before implementing sparse frequencies/canonical codes.
4. **Harden safety and correctness**: cap request size and decoded output size, reject invalid headers and corrupt/truncated payloads, verify frequency totals and padding, handle empty/single-symbol files, guard against resource exhaustion and path misuse.
5. **Add tests**: unit tests for bit packing and deterministic tree construction; integration tests for HTTP endpoints; round trips for ASCII, UTF-8, whitespace, binary bytes, empty files, and random inputs.

## Working style for Codex

- First inspect the repository tree and actual current files; this document describes a handoff, not a guarantee of exact contents.
- State which files you will edit and why. Prefer focused patches and preserve the working coursework implementation.
- Keep C++ encoding/decoding separate from HTTP transport and React UI.
- Explain unfamiliar React hooks, TypeScript types, callbacks, CMake commands, and C++ bitwise logic briefly and concretely.
- Build and run the smallest relevant test after each change; report commands/results and any tests you could not run.
- Do not claim browser integration, performance improvements, or compression savings without measuring/testing them.
- Treat uploaded files as untrusted input; avoid process-terminating error handlers (`exit`) in request handlers.
- Do not commit generated `build/` artifacts or local machine-specific CMake caches.

## First task on resumption

Inspect `CMakeLists.txt`, `src/server.cpp`, `src/ByteHuffman.cpp`, `src/ByteDecoder.cpp`, `src/HuffFile.cpp`, `frontend/src/App.tsx`, `frontend/src/components/FileUpload.tsx`, and `frontend/vite.config.ts`. Confirm the new binary routes are wired correctly, then run an end-to-end lossless round-trip test. Ask for any missing files or environment setup details only if necessary.
