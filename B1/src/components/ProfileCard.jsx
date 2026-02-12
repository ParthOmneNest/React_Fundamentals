const CardWrapper=({children})=>{
    return(
        <>
            <div style={{border:'2px solid black',padding:'10px'}}>
                {children}
            </div>
        </>
    )
}
export const ProfileCard=({name='XTYZ',role,bio})=>{
    const displayName = name && name.trim() !== '' ? name : 'Unknown Legend';
    return(
        <CardWrapper>
            <img src={`https://robohash.org/${displayName}`} alt={displayName} style={{width: '150px'}}></img>
            <h3>Name:{displayName}</h3>
            <h3>Role:{role}</h3>
            <h3>Bio:{bio}</h3>
        </CardWrapper>

    )
}