import { useState } from "react"

export const LoginStatus=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    
    const handleLogIn=()=>{
        setIsLoggedIn(true)
        alert("Welcome Back")
    }
    const handleLogOut=()=>{
        setIsLoggedIn(false)
        alert("Please Log In")
    }
    return(
        <>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            {isLoggedIn?(
              <h2>User Logged In</h2>
            ):(
                <h2>User is Logging Out</h2>
            )}
        </>
    )
}