import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        
        {children}
      
      </button>
    </div>
  )
}

export default CustomButton
