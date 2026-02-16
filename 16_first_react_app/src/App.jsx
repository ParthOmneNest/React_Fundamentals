import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { App2 } from './components/App2.jsx'
import { Events } from './components/Events.jsx'
import { Toc } from './components/Toc.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/Toc" element={<Toc/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
