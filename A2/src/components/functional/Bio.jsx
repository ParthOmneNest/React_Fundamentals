const CardWrapper=({children})=>{
    return (
        <>
            <div style={{border: '2px solid black', padding:'10px'}}>
                {children}
            </div>
        </>
    )
}

export default function DefaultFunction(){
    return <h3>Default Function</h3>
}
export function NamedFunction(){
    return <h3>Named Function</h3>
}

export const ProfileCard=({name,location,role})=>{
    return (
        <CardWrapper>
            <h2>Name: {name}</h2>
            <h2>Role: {role}</h2>
            <h2>Location: {location}</h2>
        </CardWrapper>
    )
}