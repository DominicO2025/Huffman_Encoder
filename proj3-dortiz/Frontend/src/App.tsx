import { useState } from "react";
import FileUpload from "./components/FileUpload";

function App() {
    const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

    async function handleEncode() {
        if (!selectedFile) {
            return;
        }

        const fileContent = await selectedFile.text();

        const response = await fetch("/api/encode", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: fileContent,
        });

        if (!response.ok) {
            throw new Error("Encoding request failed");
        }

        const result = await response.text();

        console.log(result);
}

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-2">
          Huffman Encoder
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Compress and decompress your text files
        </p>

        <FileUpload onFileSelect={setSelectedFile} />

        {selectedFile && (
          <div className="bg-slate-800 rounded-lg p-4 mt-4">
            <p>Filename: {selectedFile.name}</p>
            <p>
              Size: {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleEncode}
            disabled={!selectedFile}
            className="bg-blue-600 p-3 rounded-lg"
            >
            Encode
        </button>

          <button
            disabled={!selectedFile}
            className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 p-3 rounded-lg"
          >
            Decode
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;