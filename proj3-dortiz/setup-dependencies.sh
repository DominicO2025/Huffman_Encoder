#!/usr/bin/env bash

# Download/build the native and frontend dependencies for this project.
# Dependencies are kept in .deps/ so this script does not install project
# libraries globally or modify the system package database.

set -Eeuo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
DEPS_DIR="$ROOT_DIR/.deps"
VCPKG_DIR="$DEPS_DIR/vcpkg"
TRIPLET="${VCPKG_TRIPLET:-x64-linux}"

require_command() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "Missing required command: $1" >&2
        echo "Install a C++ compiler, CMake, Git, curl, Node.js, and npm, then rerun this script." >&2
        exit 1
    fi
}

for command_name in cmake git curl node npm; do
    require_command "$command_name"
done

if ! command -v g++ >/dev/null 2>&1 && ! command -v clang++ >/dev/null 2>&1; then
    echo "Missing a C++ compiler (g++ or clang++)." >&2
    exit 1
fi

mkdir -p "$DEPS_DIR"

if [[ ! -d "$VCPKG_DIR/.git" ]]; then
    if [[ -e "$VCPKG_DIR" ]]; then
        echo "$VCPKG_DIR exists but is not a Git checkout; move it aside and rerun." >&2
        exit 1
    fi
    echo "Downloading vcpkg..."
    git clone --depth 1 https://github.com/microsoft/vcpkg.git "$VCPKG_DIR"
fi

if [[ ! -x "$VCPKG_DIR/vcpkg" ]]; then
    echo "Bootstrapping vcpkg..."
    "$VCPKG_DIR/bootstrap-vcpkg.sh" -disableMetrics
fi

echo "Installing Crow and its C++ dependencies with vcpkg..."
VCPKG_DISABLE_METRICS=1 "$VCPKG_DIR/vcpkg" install crow --triplet "$TRIPLET"

echo "Installing frontend npm dependencies..."
if [[ -f "$ROOT_DIR/Frontend/package-lock.json" ]]; then
    npm --prefix "$ROOT_DIR/Frontend" ci
else
    npm --prefix "$ROOT_DIR/Frontend" install
fi

echo
echo "Dependencies are ready. Next run:"
echo "  ./run.sh"
