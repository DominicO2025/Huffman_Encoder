#!/usr/bin/env bash

# Build the C++ backend and run it together with the Vite frontend.

set -Eeuo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
VCPKG_DIR="$ROOT_DIR/.deps/vcpkg"
TRIPLET="${VCPKG_TRIPLET:-x64-linux}"
BUILD_DIR="${HUFFMAN_BUILD_DIR:-$ROOT_DIR/build-vcpkg}"
BACKEND_PID=""
FRONTEND_PID=""

cleanup() {
    trap - EXIT INT TERM
    if [[ -n "$FRONTEND_PID" ]] && kill -0 "$FRONTEND_PID" 2>/dev/null; then
        kill "$FRONTEND_PID" 2>/dev/null || true
    fi
    if [[ -n "$BACKEND_PID" ]] && kill -0 "$BACKEND_PID" 2>/dev/null; then
        kill "$BACKEND_PID" 2>/dev/null || true
    fi
}

trap cleanup EXIT INT TERM

if [[ ! -x "$VCPKG_DIR/vcpkg" || \
      ! -f "$VCPKG_DIR/installed/$TRIPLET/share/crow/CrowConfig.cmake" || \
      ! -x "$ROOT_DIR/Frontend/node_modules/.bin/vite" ]]; then
    echo "Dependencies are not installed; running setup-dependencies.sh..."
    "$ROOT_DIR/setup-dependencies.sh"
fi

echo "Configuring the C++ backend..."
cmake -S "$ROOT_DIR" -B "$BUILD_DIR" \
    -DCMAKE_TOOLCHAIN_FILE="$VCPKG_DIR/scripts/buildsystems/vcpkg.cmake" \
    -DVCPKG_TARGET_TRIPLET="$TRIPLET" \
    -DENABLE_WERROR=ON

echo "Building the backend..."
cmake --build "$BUILD_DIR" --parallel

if [[ ! -x "$BUILD_DIR/huffman_server" ]]; then
    echo "Backend executable was not created: $BUILD_DIR/huffman_server" >&2
    exit 1
fi

echo "Starting backend at http://localhost:8080..."
"$BUILD_DIR/huffman_server" &
BACKEND_PID=$!

sleep 1
if ! kill -0 "$BACKEND_PID" 2>/dev/null; then
    echo "The backend stopped during startup." >&2
    exit 1
fi

echo "Starting frontend at http://localhost:5173..."
npm --prefix "$ROOT_DIR/Frontend" run dev -- --host 127.0.0.1 &
FRONTEND_PID=$!

echo "Application is running. Press Ctrl+C to stop both services."
wait -n "$BACKEND_PID" "$FRONTEND_PID"
