export const Filter=({
    dateRange,setDateRange,
    priceRange,setPriceRange,
    minVolumeRange,setMinVolumeRange
})=>{
    return(
        <>
            <label>Sort By: </label>
           {/* Date Range(From/To) */}

           <label>Date Range: </label>
           <input type="date" value={dateRange.from} 
           onChange={(e)=>setDateRange({...dateRange,from:e.target.value})}
           />
           <label> to </label>
           <input type="date" value={dateRange.to} 
           onChange={(e)=>setDateRange({...dateRange,to:e.target.value})}
           />

           {/* Price Range(Low/High) */}
           <label>Price Range: </label>
           <input type="number" value={priceRange.low} 
           onChange={(e)=>setPriceRange({...priceRange,low:e.target.value})}
           />
           <label> to </label>
           <input type="number" value={priceRange.high} 
           onChange={(e)=>setPriceRange({...priceRange,high:e.target.value})}
           />
            {" "}
            {/* Volume Range(High) */}
           <label>Minimum Volume Size: </label>
           <input type="number" value={minVolumeRange} 
           onChange={(e)=>setMinVolumeRange(e.target.value)}/>
        
        </>
    )
}