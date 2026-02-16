import { useNavigate } from "react-router-dom"
import { Header } from './Header'
import { Footer } from './Footer'
export const Maincontent=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/portfolio")
    }
    const name="Parth"
    const value=20000
    
    return(
        <>
            <Header/>
            <h1>This is Main Content Page</h1>
            <img src={`https://robohash.org/${name}`}/>
            <h2>Name:{name}</h2>
            <h3>Value:{value}</h3>

            <button onClick={handleClick}> Click Me</button>
            <Footer/>
        </>
    )
}