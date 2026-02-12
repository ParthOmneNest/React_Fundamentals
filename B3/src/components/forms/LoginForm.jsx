import { useState } from "react"


export const LoginForm=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=(e)=>{
        e.preventDefault();
        if (email === "" || password === "") {
          alert("Please fill in everything!");
        } else if (password.length < 6) {
          alert("Password is too short!");
        } else {
          alert("Login Success for: " + email);
        }
    }

    return(
        <form onSubmit={handleLogin} style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '200px', margin: 'auto' }}>
          <h2>Login</h2>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Submit Login</button>
        </form>
    )
}