import { useNavigate } from "react-router-dom";
export const Events=()=>{
    const handleClick=()=>{
        alert("Button was clicked!");
    }
    const showMessage=()=>{
        alert("Hello from React!!");
    }

    const showTime=()=>{
        const currentTime=new Date().toLocaleTimeString();
        // alert("Current time: "+ currentTime)
        alert(`Current Time: ${currentTime}`)
    }
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate('/Toc')
    }
    return(
        <div>
            {" "}
            <h1> Event Handler</h1>{" "}
            <button onClick={handleClick}>Click Me</button>
            <button onClick={showMessage}>Show Message</button>
            <button onClick={showTime}>Show Time</button>
            <button onClick={()=>alert("Inline Handler!")}>
                {" "}Inline Handler{" "}
            </button>
            <button onClick={handleNavigate}>Toc</button>

        </div>
    )
}