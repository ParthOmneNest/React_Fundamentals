import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/Button.jsx'
import {details} from './assets/details.js'
import { ProfileCard } from './components/ProfileCard.jsx'
function App() {

  return (
    <>
          <Button/>
          {/* {details.map((detail)=>(
              <ProfileCard
              key={detail.id}
              name={detail.name}
              role={detail.role}
              bio={detail.bio}
              />
            ))} */}

            {details.map((detail)=>(
              <ProfileCard
              key={detail.id}
                {...detail}
              />
            ))}
      
    </>
  )
}

export default App
