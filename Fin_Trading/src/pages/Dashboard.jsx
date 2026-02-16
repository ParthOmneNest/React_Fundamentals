import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Portfolio } from "../components/Portfolio"
import { useState } from "react"
import { data } from "../utils/data"
export const Dashboard=()=>{
    
      const [showPortFolio,setShowPortFolio]=useState(false)
    
        if(showPortFolio){
          return (
            <Portfolio
            data={data}
            onBack={()=>setShowPortFolio(false)}
            />
          )
        }
    
        return(
          <>
            <Header/>
            <h1>Dashboard</h1>

            <button onClick={()=>setShowPortFolio(true)}>Show PortFolio</button>
            <Footer/>
          </>
        )
}