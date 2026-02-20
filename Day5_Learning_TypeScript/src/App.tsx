import './App.css'
// import * as Funcs from './concepts/06-functions'
import { Counter } from './components/ProfileCard'
// import { Greet } from './concepts/04-interfaces'
function App() {

  return (
    <>
      {/* <p>Addition: {Funcs.calc(10,20)}</p>
      <p>Multiply: {Funcs.mul(10,20)}</p>
      <p>Subtraction:{Funcs.sub(30,2)}</p> */}
      {/* <Greet name='Parth'/> */}
      <Counter/>
    </>
  )
}

export default App
