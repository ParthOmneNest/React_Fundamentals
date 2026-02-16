export const App2=()=>{
    return(
        <div> {" "}
            <h1
            style={{backgroundColor:'blue',fontSize:'32px',textAlign:'center'}}>
                {" "}Styled &nbsp;Heading{" "}
            </h1>
            {" "}

            <p style={{
                backgroundColor:"green",
                padding: "10px",
                borderRadius:"5px"
            }}>{" "}This paragraph has green background</p>{" "}

            <button style={{
                backgroundColor:"purple",
                color:"white",
                padding:"10px 20px",
                borderRadius:"5px"
            }}>
                Click{" "}{" "}{" "} Me
            </button>
        </div>
    )
}