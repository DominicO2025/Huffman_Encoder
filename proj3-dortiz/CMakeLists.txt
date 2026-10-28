cmake_minimum_required(VERSION 3.15)

project(proj3)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Find Crow
find_package(Crow CONFIG REQUIRED)

# Original word-based Huffman implementation
add_library(huffman_core
    src/Encoder.cpp
    src/Scanner.cpp
    src/utils.cpp
    src/Huffman.cpp
    src/BST.cpp
)

# New byte-based Huffman implementation
add_library(byte_huffman_core
    src/ByteHuffman.cpp
    src/ByteDecoder.cpp
    src/HuffFile.cpp
)

# Original command-line executable
add_executable(proj3
    src/main.cpp
)

target_link_libraries(proj3
    PRIVATE huffman_core
)

# Crow server executable
add_executable(huffman_server
    src/server.cpp
)

# Link Crow and the new Huffman implementation
target_link_libraries(huffman_server
    PRIVATE
    Crow::Crow
    byte_huffman_core
)

# Test encoder
add_executable(test_byte_huffman
    src/test_byte_huffman.cpp
)

target_link_libraries(test_byte_huffman
    PRIVATE byte_huffman_core
)

# Test decoder
add_executable(test_byte_decoder
    src/test_byte_decoder.cpp
)

target_link_libraries(test_byte_decoder
    PRIVATE byte_huffman_core
)

# Compiler warnings
foreach(target
    proj3
    huffman_server
    huffman_core
    byte_huffman_core
    test_byte_huffman
    test_byte_decoder
)
    target_compile_options(${target} PRIVATE
        $<$<CXX_COMPILER_ID:Clang,GNU>:-Wall -Wextra -Wpedantic -Wconversion>
        $<$<CXX_COMPILER_ID:MSVC>:/W4>
    )
endforeach()

option(ENABLE_WERROR "Treat warnings as errors" ON)

if(ENABLE_WERROR)
    foreach(target
        proj3
        huffman_server
        huffman_core
        byte_huffman_core
        test_byte_huffman
        test_byte_decoder
    )
        target_compile_options(${target} PRIVATE
            $<$<CXX_COMPILER_ID:Clang,GNU>:-Werror>
            $<$<CXX_COMPILER_ID:MSVC>:/WX>
        )
    endforeach()
endif()