import React from "react";

interface Props{
    text: string
    type: "input" | "textarea"
    placeholder: string | undefined
    setText: (value: string) => void
}
const TextInput: React.FC<Props> = ({text, placeholder, setText, type}) => {
    return <div>
        { type === "input" ? 
        <input 
        className="p-2"
        placeholder={placeholder}
        value={text} 
        onChange={(e) => setText(e.target.value)}
    ></input>
    : <textarea
        className="p-2"
        placeholder={placeholder}
        value={text} 
        onChange={(e) => setText(e.target.value)}
    ></textarea>
    }
    </div>
}

export default TextInput