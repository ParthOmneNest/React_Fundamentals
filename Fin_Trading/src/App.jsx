import { Portfolio } from './components/Portfolio'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Maincontent } from './components/MainContent'
import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { Auth } from './components/Auth'


function App() {
 
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default App
