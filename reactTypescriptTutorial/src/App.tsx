import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  return (
    <div className='App'>
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
    </div>
  )
}

export default App
