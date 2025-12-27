import React from 'react'
import frame0 from '../assets/frame1.webp'
import frame1 from '../assets/frame2.webp'
import frame2 from '../assets/frame3.webp'
import frame3 from '../assets/frame4.webp'

export const Carousel = ({ activeIndex }) => {


    const imageStyles = {
      position: 'absolute', 
      top: 0, 
      right: 0, 
      width: '1032px'
    }

    const frame = [frame0, frame1, frame2, frame3];

  return (
    <div style={{width: '1032px', margin: '0 auto', height: '350px', backgroundColor: 'transparent', marginTop: '80px', borderRadius: '34px', position: 'relative'}}>
      <img 
      key={activeIndex}
      style={imageStyles}
      src={frame[activeIndex]} 
      className='fade-animation'
      draggable={false}
      />
      

    </div>
 )
}
