import { useState } from "react";
import FileUpload from "./components/FileUpload";
import FileSidebar from "./components/FileSidebar";
import UploadedFilesSidebar from "./components/UploadedFilesSidebar";
import ProcessedFileSidebar from "./components/ProcessedFileSidebar";

type ProcessedFile = {
  blob: Blob;
  fileName: string;
};

function App() {
    const SMALL_FILE_LIMIT = 2 * 1024;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [processedFile, setProcessedFile] = useState<ProcessedFile | null>(null);
    const [selectedSampleFile, setSelectedSampleFile] = useState<string | null>(null);

    const [isEncoding, setIsEncoding] = useState(false);

    const isSmallTextFile =
      selectedFile !== null &&
      selectedFile.name.toLowerCase().endsWith(".txt") &&
      selectedFile.size < SMALL_FILE_LIMIT;

    function handleFileSelect(file: File, sampleFileName: string | null = null) {
      setSelectedFile(file);
      setProcessedFile(null);
      setSelectedSampleFile(sampleFileName);
      setUploadedFiles((files) => {
        const alreadyAdded = files.some(
          (existingFile) =>
            existingFile.name === file.name &&
            existingFile.lastModified === file.lastModified,
        );

        return alreadyAdded ? files : [...files, file];
      });
    }

    function downloadFile(blob: Blob, fileName: string) {
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    async function handleEncode() {
    if (!selectedFile || isEncoding) return;

    if (!selectedFile.name.toLowerCase().endsWith(".txt")) {
      alert("Please select a .txt file to encode.");
      return;
    }

    setIsEncoding(true);

    try {
      const response = await fetch("/api/encode", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: selectedFile,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const blob = await response.blob();

      setProcessedFile({
        blob,
        fileName: selectedFile.name.replace(/\.txt$/i, ".huff"),
      });

    } catch (error) {
      console.error("Encoding error:", error);
      alert("Failed to encode file.");

    } finally {
      setIsEncoding(false);
    }
  }

  async function handleDecode() {
    if (!selectedFile || isEncoding) return;

    if (!selectedFile.name.toLowerCase().endsWith(".huff")) {
      alert("Please select a .huff file to decode.");
      return;
    }

    setIsEncoding(true);

    try {
      const response = await fetch("/api/decode", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: selectedFile,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const blob = await response.blob();

      setProcessedFile({
        blob,
        fileName: selectedFile.name.replace(/\.huff$/i, ".txt"),
      });

    } catch (error) {
      console.error("Decoding error:", error);
      alert("Failed to decode file.");

    } finally {
      setIsEncoding(false);
    }
  }

  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start">
        <FileSidebar
          selectedFileName={selectedSampleFile}
          onFileSelect={(fileName) => setSelectedSampleFile(fileName)}
          onSampleUse={(file) => handleFileSelect(file, file.name)}
        />

        <main className="min-w-0 flex-1">

        <h1 className="text-3xl font-bold text-center mb-2">
          Huffman Encoder
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Compress and decompress your text files
        </p>

        <FileUpload onFileSelect={handleFileSelect} />

        <ProcessedFileSidebar
          file={processedFile}
          onDownload={() => {
            if (processedFile) {
              downloadFile(processedFile.blob, processedFile.fileName);
            }
          }}
        />

        {selectedFile && (
          <div className="bg-slate-800 rounded-lg p-4 mt-4">
            <p>Filename: {selectedFile.name}</p>
            <p>
              Size: {(selectedFile.size / 1024).toFixed(2)} KB
            </p>

            {isSmallTextFile && (
              <p className="mt-3 rounded-lg border border-amber-700 bg-amber-950/40 p-3 text-sm leading-5 text-amber-200">
                This file is smaller than 2 KB. The encoder can process it, but
                the fixed 2,061-byte Huffman header is larger than a small file,
                so the encoded result will not save space and may be larger.
              </p>
            )}
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
              onClick={handleEncode}
              disabled={!selectedFile || isEncoding}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 p-3 rounded-lg"
            >
              {isEncoding ? "Processing..." : "Encode"}
          </button>

          <button
            onClick={handleDecode}
            disabled={!selectedFile || isEncoding}
            className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 p-3 rounded-lg"
          >
              {isEncoding ? "Processing..." : "Decode"}
          </button>

        </div>

        </main>

        <UploadedFilesSidebar
          files={uploadedFiles}
          selectedFile={selectedFile}
          onFileSelect={handleFileSelect}
        />
      </div>
    </div>
  );
}

export default App;
