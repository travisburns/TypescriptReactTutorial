import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }


  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ] 



  return (
    <div className='App'>
      <Button handleClick={(event, id) => {
        console.log('button clicked', event, id)
      }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  )
}

export default App
