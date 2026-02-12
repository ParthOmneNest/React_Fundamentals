import { useState } from "react"


export const Button =()=>{
    const [isOn,setIsOn] = useState(false);
    const handleClick=()=>{
        const nextState=!isOn;
        setIsOn(nextState);
    }
    return (
        <>
            <button onClick={handleClick}>
            {isOn? "Click To disable":"Click to Enable"}
            </button>

            <p>
                Current Status:- {isOn?"Light On":"Light Off"}
            </p>

            <button
            disabled={isOn}
            style={{
                opacity:isOn?0.4:1,
                cursor:isOn?'not-allowed':'pointer'
            }}
            >
                I am servant button
            </button>
        </>
        
    )
}