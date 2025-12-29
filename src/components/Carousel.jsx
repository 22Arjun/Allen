import React from 'react'


export const Carousel = ({ images, arrayIndex, carouselStyles }) => {


    const imageStyles = {     
      maxWidth: '100%',
      display: 'block'

    }

    

  return (
    <div style={carouselStyles}>
      <img 
      key={arrayIndex}
      style={imageStyles}
      src={images[arrayIndex]}
      className='fade-animation'
      draggable={false}
      />
      

    </div>
 )
}
