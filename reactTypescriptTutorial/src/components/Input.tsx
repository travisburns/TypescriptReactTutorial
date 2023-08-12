import React from 'react'

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} 

const Input = ({ value, handleChange}: InputProps) => {
    const handleInputChange = () => {
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event)
        }
    }
  return (
   <input type='text' value={value} onChange={handleChange}/>
  )
}

export default Input
