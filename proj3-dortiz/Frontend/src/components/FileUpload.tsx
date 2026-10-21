import { useState, type ChangeEvent, type DragEvent } from "react"; //imports react drag, change, and use state

type FileUploadProps = {
    onFileSelect: (file: File) => void;
};

export default function FileUpload({ onFileSelect }: FileUploadProps) {
    const [fileName, setFileName] = useState("");

    function handleFile(file: File) { //creates a edge case to check if file is valid
        if(!file.name.toLowerCase().endsWith(".txt")) {
            alert("Please upload a .txt file");
            return; 
        }

        setFileName(file.name)
        onFileSelect(file);

    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if(file){
            handleFile(file);
        }
    }

    function handleDrop(event: DragEvent<HTMLDivElement>){
        event.preventDefault();

        const file = event.dataTransfer.files[0]; 

        if (file) {
            handleFile(file);
        }
    }

    return (
        <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-gray-500
                        rounded-lg p10 text-center bg-gray-800"
        >
            <h2 className="text-xl font-bold mb-4"> 
                Upload Text Files
            </h2>

            <input
                type="file"
                accept=".txt"
                onChange={handleChange}
                className="mb-4"
            />

            <p className="text-grey-400">
                Or drag and drop your file here
            </p>

            {fileName && (
                <p className="mt-4 text-green-400">
                    Selected: {fileName}
                </p>
            )}



        </div>

    )
    




}




    


