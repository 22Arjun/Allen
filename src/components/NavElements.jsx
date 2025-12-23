import React from 'react'

export const NavElements = ({ name }) => {
  return (
    <div className='nav-elements' style={{height: '37px', fontSize: '0.875rem', fontWeight: 500}}>
        { name }
        <span className='underline' style={{width: '100%', height: '4px', marginTop: '8px', backgroundColor: '#0266da', display: 'block', borderRadius: '12px'}}></span>
    </div>
  )
}
