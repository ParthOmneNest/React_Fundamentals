const FeatureWrapper=({children})=>{
    return(
        <div style={
            {
                backgroundColor:"white",
                color:'blue',
                padding: '8px',
                margin:'2px',
                borderRadius: '15px',
                border: '1px solid greenyellow',
                display: 'flex',
                flexDirection: 'column',
            }
        }>         
           {children}
        </div>
    )
}

export const FeatureCard=({description})=>{
    return(
        <>
        <FeatureWrapper>
            <h2>{description}</h2>
        </FeatureWrapper>
        </>
    )
}