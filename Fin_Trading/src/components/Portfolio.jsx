export const Portfolio=({name,image,value,onBack})=>{
    return(
            <div style={{
                width: '200px',             // Fixed width for the "small box"
                border: '1px solid #ddd',    // Light border
                borderRadius: '8px',        // Rounded corners
                padding: '12px',            // Space inside the box
                textAlign: 'center',        // Centers the text
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Subtle shadow
                background: '#fff'          // White background
            }}>
                <img 
                    src={image} 
                    alt={name} 
                    style={{ 
                        width: '100%',      // Image fills the box width
                        height: '150px',    // Fixed height
                        objectFit: 'cover', // Prevents image stretching
                        borderRadius: '4px' // Matches the box curve
                    }} 
                />
                
                <p style={{ 
                    fontWeight: 'bold', 
                    margin: '10px 0 5px 0',
                    fontSize: '1.1rem' 
                }}>
                    Name: {name}
                </p>
                
                <p style={{ 
                    margin: '0', 
                    color: '#0066cc', 
                    fontWeight: '600' 
                }}>
                    Value: ₹{value}
                </p>
            </div>
            
    )
}