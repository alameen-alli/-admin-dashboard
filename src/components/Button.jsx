import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size}) => {
  return (
      <button
       type="button" 
       style={{backgroundColor : bgColor, color, borderRadius}}
       className={`text-${size} p-1.5 hover:drop-shadow-xl`}
      >
        {text}
      </button>
  )
}
export default Button;