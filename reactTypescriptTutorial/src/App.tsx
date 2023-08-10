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
    
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Vishwas" messageCount={10} isLoggedIn={false}/>
    </div>
  )
}

export default App
