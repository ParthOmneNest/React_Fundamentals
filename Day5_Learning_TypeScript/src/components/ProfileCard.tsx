import { useState } from "react"

interface ProfileCardProps{
    name:string,
    role:string,
    isOnline?:boolean
}


export function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('hello');
    const [isVisible, setIsVisible] = useState(false);

    // ✅ Use a function to change state, don't just call it in the body!
    const handleUpdate = () => {
      
        setText("New Text");
        setIsVisible(!isVisible);
    };

    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }

    const handleReset=()=>{
        setCount(0)
    }
    return (
        <>
            <h1>Count: {count}</h1>
            <h1>Text: {text}</h1>
            <h1>Visibility: {isVisible ? "Shown" : "Hidden"}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleUpdate}>Update Visibility</button>
        </>
    );
}

