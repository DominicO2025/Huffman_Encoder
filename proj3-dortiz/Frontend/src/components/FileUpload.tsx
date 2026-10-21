import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

type FileUploadProps = {
  onFileSelect: (file: File) => void;
};

function FileUpload({ onFileSelect }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    if (!file.name.toLowerCase().endsWith(".txt")) {
      alert("Please upload a .txt file.");
      return;
    }

    onFileSelect(file);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      handleFile(file);
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (file) {
      handleFile(file);
    }
  }

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-10 text-center
        ${
          isDragging
            ? "border-blue-500 bg-blue-950"
            : "border-slate-500 bg-slate-800"
        }`}
    >
      <div className="text-4xl mb-4">📁</div>

      <h2 className="text-xl font-semibold mb-2">
        Drag and drop your file here
      </h2>

      <p className="text-gray-400 mb-5">
        Or select a .txt file from your computer
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".txt"
        onChange={handleChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-lg"
      >
        Browse Files
      </button>
    </div>
  );
}

export default FileUpload;