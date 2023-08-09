import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Greet name="Vishwas"/>
    </div>
  )
}

export default App
