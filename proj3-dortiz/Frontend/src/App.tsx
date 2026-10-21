import {useState} from "react"
import FileUpload from "./components/FileUpload";

export default function App() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function handleEncode() { //Forces user to upload file before running
        if(!selectedFile) {
            alert("Please Upload a file first")
            return;
        }

        console.log("File to encode: ", selectedFile.name);
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">

            <h1 className="tex-3xl font-bold mb-6">
                Huffman Encoder
            </h1>

            <div className="max-w-2xl space-y-4">
                <FileUpload onFileSelect={setSelectedFile} />

                <button onClick={handleEncode}
                className="bg-blue-600 hover:bg-blue-700
                            px-6 py-3 rounded-lg">

                    Encode Text
                </button>

            </div>

        </div>
    )
}