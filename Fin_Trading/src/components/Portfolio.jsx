export const Portfolio=({name,image,value,onBack})=>{
    return(
        <>
          <h1>This is my current Portfolio</h1>
          <img src={image} alt={name} />
          <p>Name:{name}</p>
          <p>Value:{value}</p>
          <button onClick={onBack}>Go Back To Home Page</button>
        </>
    )
}