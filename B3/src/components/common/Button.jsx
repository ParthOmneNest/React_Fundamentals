import { useState } from "react"
const variants={
    primary:{backgroundColor:'blue',color:'white'},
    secondary:{backgroundColor:'green',color:'white'},
    danger:{backgroundColor:'red',color:'white'}
}

const sizes={
    small:{padding:'5px',fontSize:'5px'},
    medium:{padding:'10px',fontSize:'8px'},
    large:{padding:'12px',fontSize:'10px'},
}


export const Button=({
    label="Submit",
    variant="primary",
    size="medium"
})=>{
    const commonStyle={
        cursor:'pointer',
        borderRadius:'8px',border:'none',
        ...variants[variant],
        ...sizes[size]
    }
    const handleClick=()=>{
        if(label=="Submit"){
            alert("Success! Your information has been sent")
        }else{
            alert("Pressed wrong button")
        }
    }
    return(
        <button style={commonStyle} onClick={handleClick}>
            {label}
        </button>
    )
}