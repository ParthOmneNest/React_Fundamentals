import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/forms/LoginForm'
import { SignUpForm } from './components/forms/SignUpForm'
import { Button } from './components/common/Button'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div style={{textAlign:'center'}}>
      <button onClick={() => setIsLogin(true)}>Go to Login</button>
      <button onClick={() => setIsLogin(false)}>Go to Signup</button>

      {isLogin?<LoginForm/>:<SignUpForm/> }
      <Button
      label='Submit'
      variant='secondary'
      size='medium'
      />
      <Button
      label='Delete'
      variant='danger'
      size='large'
      />

    </div>
  )
}

export default App
