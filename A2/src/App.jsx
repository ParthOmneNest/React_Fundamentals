import './App.css'
import NavBar from './components/layout/NavBar.jsx'
import Footer from './components/layout/Footer.jsx'
import Content from './components/layout/MainContent.jsx'
import DefaultFunction from './components/functional/Bio.jsx'
import {NamedFunction} from './components/functional/Bio.jsx'

function App() {

  return (
    <>
        <NavBar/>
        <DefaultFunction/>
        <NamedFunction/>
  
  
         <Content/>
         <Footer/> 

    </>
  )
}

export default App
