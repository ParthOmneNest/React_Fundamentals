export const NavBar=()=>{
    const listStyle={
        color: 'grey', textDecoration: 'none'
    }
    return (
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center' ,
        }}>
        
            <h2 style={{
                color:'black',
            }}>Project B2</h2>

            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '20px',
            }}>
                <li><a href="#home" style={listStyle}>Home</a></li>
                <li><a href="#about" style={listStyle}>About</a></li>
                <li><a href="#contact" style={listStyle}>Contact</a></li>
            </ul>
        </div>
    )
}