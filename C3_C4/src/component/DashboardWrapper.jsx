import { useState } from "react";

export const DashboardWrapper=({isLoading})=>{
    if(isLoading){
        return <p>Loading...</p>
    }
    return(
        <pre>
            Your Dreams Have Come True.
            A Sudden Warm Rainstorm Washes Down In Sweet Hyphens.
            There Is So Much To Understand.
            Tom Doesn't Have A Bicycle.
            Isn't Language Learning Fun ?
        </pre>

    )
}