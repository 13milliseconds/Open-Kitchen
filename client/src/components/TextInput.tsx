import React from "react";

interface Props{
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}
const TextInput: React.FC<Props> = ({text, setText}) => {
    return <input 
        className="p-2"
        placeholder="Type ingredient"
        value={text} 
        onChange={(e) => setText(e.target.value)}
    ></input>
}

export default TextInput