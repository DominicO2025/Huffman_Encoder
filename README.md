# Huffman Encoder & Decoder

A full-stack file compression application built using **C++, React, TypeScript, Tailwind CSS, and Crow**. The application allows users to upload text files, compress them using Huffman coding, and decompress the resulting files to reconstruct the original content without losing any information.

The project originally began as a C++ university assignment focused on implementing Huffman encoding using binary search trees, priority queues, and tree traversal algorithms. I later expanded it into a full-stack application by developing a React-based user interface and integrating a C++ HTTP server using the Crow framework.

### Key Features

- **Lossless File Compression:** Uses byte-based Huffman encoding to compress text files while preserving their original contents, including capitalization, punctuation, and whitespace.
- **File Encoding & Decoding:** Converts `.txt` files into custom `.huff` files and reconstructs the original files through Huffman decoding.
- **Custom Binary File Format:** Stores compressed data alongside the frequency information required to reconstruct the Huffman tree.
- **Bitwise Compression:** Uses bitwise operations to pack variable-length Huffman codes into bytes for more efficient storage.
- **Interactive Web Interface:** Built with React, TypeScript, and Tailwind CSS, supporting drag-and-drop file uploads and downloadable results.
- **C++ Backend Integration:** Uses Crow to handle HTTP requests and connect the frontend to the C++ compression and decompression algorithms.

### Technologies Used

**Frontend:** React, TypeScript, Tailwind CSS, Vite

**Backend:** C++, Crow HTTP Framework

**Build Tools:** CMake

**Core Concepts:** Huffman Coding, Binary Trees, Priority Queues, Recursion, Bitwise Operations, Binary File I/O, HTTP Communication

### How It Works

When a user uploads a text file, the C++ backend analyzes the frequency of each byte and constructs a Huffman tree. Frequently occurring bytes are assigned shorter binary codes, while less frequent bytes receive longer codes. These codes are packed into binary data and saved in a custom `.huff` file containing the information needed for decompression.

During decoding, the application reconstructs the Huffman tree from the stored frequency table and uses it to translate the compressed binary data back into the original file, preserving its contents byte for byte.
