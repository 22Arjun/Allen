import React from 'react'

export const ClickButton = ({ text, isActive, onClick }) => {
    const activeStyles = {
        border: '1px solid #0266da',
        backgroundColor: '#D5E8FF',
        color: '#1E1E22'
    }

    
  return (
    <div style={ isActive ? activeStyles : {} } onClick={onClick} className='streamButton'>{ text }</div>
  )
}
