cmake_minimum_required(VERSION 3.15)

project(proj3)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Find Crow
find_package(Crow CONFIG REQUIRED)

# Original command-line program
add_library(huffman_core
    src/Encoder.cpp
    src/Scanner.cpp
    src/utils.cpp
    src/Huffman.cpp
    src/BST.cpp
)

add_executable(proj3 src/main.cpp)

target_link_libraries(proj3 PRIVATE huffman_core)

add_executable(huffman_server src/server.cpp)

target_link_libraries(huffman_server
    PRIVATE huffman_core Crow::Crow
)

# Compiler warnings
foreach(target proj3 huffman_server)
    target_compile_options(${target} PRIVATE
        $<$<CXX_COMPILER_ID:Clang,GNU>:-Wall -Wextra -Wpedantic -Wconversion>
        $<$<CXX_COMPILER_ID:MSVC>:/W4>
    )
endforeach()

option(ENABLE_WERROR "Treat warnings as errors" ON)

if(ENABLE_WERROR)
    foreach(target proj3 huffman_server)
        target_compile_options(${target} PRIVATE
            $<$<CXX_COMPILER_ID:Clang,GNU>:-Werror>
            $<$<CXX_COMPILER_ID:MSVC>:/WX>
        )
    endforeach()
endif()