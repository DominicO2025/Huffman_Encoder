# Huffman Encoder & Decoder

A full-stack file-compression project using **C++**, **Crow**, **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Upload a text file, encode it using byte-based Huffman coding, download a custom `.huff` file, and decode it to recover the original bytes.

> **Project status:** The byte-based encoder/decoder passed local round-trip tests (`cmp` reported identical files), and the updated CMake build succeeded. The final browser-based encode/decode workflow should still be tested end to end on the current checkout.

## Features

- Byte-based lossless Huffman coding (preserves capitalization, whitespace, punctuation, and original bytes).
- Frequency counting, priority-queue tree construction, recursive code generation, and bit packing.
- Custom `.huff` binary file containing the information needed to decode the data.
- React upload interface and HTTP endpoints implemented with Crow.
- Separate original **word-based coursework implementation** retained for reference.

## Technology

| Area | Tools |
| --- | --- |
| Frontend | React, TypeScript, Tailwind CSS, Vite |
| Backend | C++23, Crow |
| Build | CMake, C++ compiler |
| Concepts | Huffman trees, priority queues, recursion, binary I/O, bitwise operations, HTTP |

## Architecture

```text
Browser (React / Vite)
   | POST /api/encode or /api/decode (raw file bytes)
   v
Crow server (C++)
   |-- encodeBytes(inputPath) -> .huff
   `-- decodeBytes(inputPath, outputPath) -> restored file
   |
   v
Binary HTTP response -> browser download
```

### Relevant source files

The following is the **intended layout** discussed during development. Confirm actual locations in the checkout before editing.

```text
frontend/
  src/
    App.tsx
    UI.tsx
    components/FileUpload.tsx
  vite.config.ts
  package.json

proj3-dortiz/                 # C++ backend directory (may differ)
  CMakeLists.txt
  src/
    main.cpp                 # Original CLI entry point
    Encoder.cpp/.hpp         # Original word-based workflow
    Scanner.cpp/.hpp
    BST.cpp/.hpp
    Huffman.cpp/.hpp
    utils.cpp/.hpp
    ByteHuffman.cpp/.hpp     # New lossless encoder
    ByteDecoder.cpp/.hpp     # New lossless decoder
    HuffFile.cpp/.hpp        # .huff serialization
    server.cpp               # Crow HTTP entry point
    test_byte_huffman.cpp    # Local encoder test
    test_byte_decoder.cpp    # Local decoder test
```

## Build and run locally

### Requirements

- C++23-compatible compiler and CMake
- Crow discoverable by CMake (`find_package(Crow CONFIG REQUIRED)`)
- Node.js and npm

### Backend

From the directory containing the backend `CMakeLists.txt`:

```bash
cmake -S . -B build
cmake --build build
./build/huffman_server
```

The Crow server listens on `http://localhost:8080` in the current development configuration.

### Frontend

From the frontend directory:

```bash
npm install
npm run dev
```

Open the URL Vite prints (commonly `http://localhost:5173`). The development proxy in `vite.config.ts` should forward `/api` requests to `http://localhost:8080`.

### Use

1. Upload a `.txt` file and click **Encode** to download a `.huff` file.
2. Upload the `.huff` file and click **Decode** to download the restored text file.
3. Verify the restored file matches the original byte-for-byte.

### Command-line verification

The project has used separate `test_byte_huffman` and `test_byte_decoder` CMake targets. If present, run from the backend directory:

```bash
cmake --build build --target test_byte_huffman test_byte_decoder
./build/test_byte_huffman
./build/test_byte_decoder
cmp test.txt restored.txt
```

`cmp` exits successfully without output if the files are identical. The test programs currently use filenames hard-coded in their test sources; check those filenames before running.

## `.huff` format (version 1)

| Field | Size | Description |
| --- | ---: | --- |
| Signature | 4 bytes | ASCII `HUFF` |
| Version | 1 byte | `1` |
| Original size | 8 bytes | Unsigned little-endian integer |
| Frequencies | 2,048 bytes | 256 unsigned 64-bit little-endian counts |
| Payload | Variable | Packed Huffman bits, most-significant bit first |

The fixed header is **2,061 bytes**, so small files may become larger after encoding. The decoder uses the original byte count to stop before trailing padding bits. Encoder and decoder must use identical deterministic tie-breaking when constructing trees from frequencies.

## Known limitations and future work

- Confirm browser-based encode/decode and file downloads on the latest code; a successful build alone does not prove end-to-end functionality.
- Optimize the 2,048-byte frequency table (e.g., sparse or canonical-code representation), with a versioned format change.
- Add original/compressed size and compression ratio to the UI.
- Harden decoder validation and cap decompressed output/resource usage before public deployment.
- Add automated round-trip tests for empty input, one repeated byte, punctuation, Unicode/UTF-8, random binary bytes, malformed `.huff` files, and large inputs.
- Preserve the original coursework code and document which portions were supplied as part of the assignment.

## Background

The project began as a university C++ Huffman-coding assignment using word tokenization and binary search trees. It was subsequently extended into a React/Crow application with a separate byte-based, lossless compression path.
