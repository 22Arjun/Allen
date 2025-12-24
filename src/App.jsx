import React from 'react'
import { Nav } from './components/Nav'
import { Carousel } from './components/Carousel'
import './App.css'
import loud from './assets/loud.png'
import shine from './assets/star.webp'
import arrow from './assets/arrow.webp'
// import { BrowserRouter, Router, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='wrapper'>
      <Nav></Nav>
      <div style={{width: '100%', height: '40px', backgroundColor: '#019370', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img width={32} draggable={false} src={loud} alt={"Speaker"} style={{aspectRatio: '1/1'}} />
          <span style={{color: '#F8FD05', fontSize: '12px', fontWeight: 600}}>LAST CHANCE TO GET 15% OFF</span>
        </div>
        <img width={24} height={24} src={shine} alt={'Shining'} />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span style={{fontSize: '14px', color: '#FFFF', fontWeight: 600, marginLeft: '12px', marginRight: '12px', padding: '12px 0px'}}>Extended Early Bird Offer ends 28th Dec</span>
          <img width={24} height={24} src={arrow} alt={"arrow"} />
        </div>
      </div>
      <div style={{backgroundColor: '#edf2fa', display: 'flex', flexDirection: 'column', paddingBottom: '50px'}}>
        <Carousel></Carousel>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px'}}>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#1C1D1D', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
        </div>
      </div>
    </div>
  )
}

export default App    