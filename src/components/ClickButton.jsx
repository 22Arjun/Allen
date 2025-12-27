import React from 'react'

export const ClickButton = ({ text, style, onClick }) => {
    

    
  return (
    <div style={ style } onClick={onClick} className='streamButton'>{ text }</div>
  )
}
