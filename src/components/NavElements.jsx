import React from 'react'

export const NavElements = ({ name, children, style }) => {
  return (
    <div className='nav-elements' style={{position: 'relative', height: '42px', fontSize: '0.875rem', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', ...style}}>
        { name } {children}
        <span className='underline' style={{width: '100%', height: '4px', marginTop: '8px', backgroundColor: '#0266da', display: 'block', borderRadius: '12px'}}></span>
    </div>
  )
}
