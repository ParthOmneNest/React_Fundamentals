import { useState } from "react"
import { Dashboard } from "../pages/Dashboard"
import { useNavigate } from "react-router-dom"

export const Auth=()=>{
    const [isLogin,setIsLogin]=useState(false)

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isLogin){
            console.log('Login: ',{email,password})
            // setIsAuthenticated(true)
            navigate('/dashboard')
        } 
        else{
            console.log('SignUp',{name,email,password})
            setIsLogin(true)
        } 

    }
    const handleToggle=()=>{
        setIsLogin(!isLogin)
    }
    const navigate=useNavigate()
    
    return(
        <>
            <h1>{isLogin?"Login":"SignUp"}</h1>
            <form onSubmit={handleSubmit}>

            {!isLogin &&(
                <div>
                    <label>Name: </label>
                    <input
                    type="input"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Type your name here" required
                    />
                </div>
            )}
            <br/>
            {/* // email */}
                <div>
                    <label>Email: </label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Type your email here" required
                    />
                </div>
            <br/>

            {/* // password */}
                <div>
                    <label>Password: </label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Type your password here" required
                    />
                </div>
                <button type="submit">{isLogin?"Login":"SignUp"}</button>
            </form>
            <br/>
            <p>
                {isLogin?"Don't have an account?":"Already have an account"}
            <button onClick={handleToggle}>{isLogin?"Signup":"Login"}</button>
            </p>
            
        </>
    )
}