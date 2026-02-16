import { CardWrapper } from "./Cards/CardWrapper"
export const Portfolio=({data,onBack})=>{
    return(
        <>
          <h1>This is my current Portfolio</h1>
          {data.map((users)=>(
            <CardWrapper key={users.id}
            name={users.name}
            image={users.image}
            age={users.age}
            value={users.value}
            />
          ))}
          <br/>
          <button onClick={onBack}>Go Back To Home Page</button>
        </>
    )
}