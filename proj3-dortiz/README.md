# Huffman Encoder and Decoder

This project contains a student-built Huffman encoder/decoder with both a C++ command-line implementation and a browser-based application.

The web application uses the newer byte-based implementation. It preserves the exact uploaded bytes, including whitespace, capitalization, UTF-8 text, and binary data. The C++ backend is served with Crow, and the React frontend is built with Vite.

## Project structure

- `src/ByteHuffman.cpp` and `src/ByteDecoder.cpp` implement lossless byte-based compression and decompression.
- `src/HuffFile.cpp` reads and writes the version 1 `.huff` file format.
- `src/server.cpp` provides the HTTP API used by the browser.
- `Frontend/` contains the React/Vite user interface.
- `src/Encoder.cpp`, `src/Scanner.cpp`, `src/Huffman.cpp`, and related files contain the original word-based coursework implementation. This path normalizes text and does not preserve the original file byte-for-byte.

## Requirements

On Linux, install or make available:

- Bash
- Git and curl
- CMake
- A C++ compiler (`g++` or `clang++`)
- Node.js and npm

The dependency script downloads a local copy of vcpkg, installs Crow and its C++ dependencies, and installs the frontend packages. It does not install project libraries globally.

## Install dependencies

From the repository root, make the scripts executable if needed and run:

```bash
chmod +x setup-dependencies.sh run.sh
./setup-dependencies.sh
```

Dependencies are stored in `.deps/`, and CMake build output is stored in `build-vcpkg/`. These local directories are ignored by Git.

## Run the web application

The all-in-one script configures and builds the backend, then starts both services:

```bash
./run.sh
```

Open the frontend at:

```text
http://localhost:5173
```

The backend listens on port `8080`. Vite proxies browser requests beginning with `/api` to the backend.

Press `Ctrl+C` in the terminal to stop both the frontend and backend.

If dependencies have not been installed yet, `run.sh` automatically calls `setup-dependencies.sh` first.

## Browser workflow

1. Select a `.txt` file and choose the encode operation.
2. Download the generated `.huff` file.
3. Select the `.huff` file and choose the decode operation.
4. Download the restored file.

The browser exchanges binary responses with the server, so compressed and restored files are downloaded as binary blobs rather than converted to text.

## HTTP endpoints

The backend provides two POST endpoints:

- `POST /api/encode`: accepts the uploaded bytes and returns a `.huff` file.
- `POST /api/decode`: accepts a `.huff` file and returns the restored bytes.

Uploads are written to isolated temporary workspaces. The current server limits each request to 10 MiB.

## Run the C++ tests

After running the setup or run script, the tests can be built and run with:

```bash
cmake --build build-vcpkg --target test_byte_huffman test_byte_decoder
./build-vcpkg/test_byte_huffman
./build-vcpkg/test_byte_decoder
```

The repository also contains a sample round-trip comparison:

```bash
cmp test.txt restored.txt
```

No output from `cmp` means the files are byte-for-byte identical.

## Manual commands

The frontend can be run independently from `Frontend/`:

```bash
npm install
npm run dev
```

The backend can be configured and built manually after dependencies are installed:

```bash
cmake -S . -B build-vcpkg \
  -DCMAKE_TOOLCHAIN_FILE="$PWD/.deps/vcpkg/scripts/buildsystems/vcpkg.cmake" \
  -DVCPKG_TARGET_TRIPLET=x64-linux
cmake --build build-vcpkg --parallel
./build-vcpkg/huffman_server
```

For normal use, `setup-dependencies.sh` followed by `run.sh` is the recommended workflow.
