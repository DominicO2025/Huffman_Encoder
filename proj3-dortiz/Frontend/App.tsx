import {useState} from "react"

export default function App() {
    const [text, setText] = useState("");

    function handleEncode() {
        console.log(text);
    }

    return (
        <div>
            <h1>Huffman Encoder</h1>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleEncode}>
                Encode Text
            </button>
        </div>
    )
}