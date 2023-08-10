import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
 const {messageCount = 0} = props
 
  return (
    <div>
      {
        props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'Welcome Guest'
      }
      <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2>
    </div>
  )
}

export default Greet
