import React from 'react'
import { Nav } from './components/Nav'
import { Carousel } from './components/Carousel'
import './App.css'
import loud from './assets/loud.png'
import shine from './assets/star.webp'
import arrow from './assets/arrow.webp'
import classes from './assets/classes.webp';
import JEE from './assets/JEE Courses.webp';
import NEET from './assets/Neet Courses.webp';
// import { BrowserRouter, Router, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='wrapper'>
      <Nav></Nav>
      <div style={{width: '100%', height: '40px', backgroundColor: '#019370', display: 'flex', justifyContent: 'center', alignItems: 'center', userSelect: 'none'}}>
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
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '14px'}}>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#1C1D1D', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
          <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#0F0F0F33', cursor: 'pointer'}}></div>
        </div>
      </div>

      <div style={{width: '1032px', display: 'flex', flexDirection: 'column', margin: '0 auto', userSelect: 'none'}}>
        <h2 style={{margin: 0, marginTop: '52px', fontSize: '24px'}}>Pick the right course for you</h2>
        <div style={{padding: '24px 0 0 0', display: 'flex', backgroundColor: 'white', gap: '36px', paddingBottom: '50px'}}>
          <div style={{backgroundColor: '#edf2fa', width: '100%', borderRadius: '20px', padding: '24px', height: '192px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative'}}>
            <h3 style={{fontSize: '20px', margin: 0}}>NEET Courses</h3>
            <img style={{position: 'absolute', width: '315px', bottom: 0, right: 0}} src={NEET} />
            <div style={{display: 'flex'}}>
              <h2 style={{fontSize: '16px', color: '#025FCA', cursor: 'pointer', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '3px', zIndex: 1}}>View Courses </h2>
              <svg style={{marginTop: '16px', cursor: 'pointer', zIndex: 1}} fill={"none"} height={"24" }viewBox={"0 0 20 20"} width={"24"} xmlns={"http://www.w3.org/2000/svg"}><path d={"M7.5 15L12.5 10L7.5 5"} stroke={"#0266DA"} stroke-linecap={"round"} stroke-linejoin={"round"} stroke-width={"1.5"}></path></svg>
            </div>
            
          </div>
          <div style={{backgroundColor: '#edf2fa', width: '100%', borderRadius: '20px', padding: '24px', height: '192px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative'}}>
            <h3 style={{fontSize: '20px', margin: 0}}>JEE Courses</h3>
            <img style={{position: 'absolute', width: '315px', bottom: 0, right: 0}} src={JEE} />
            <div style={{display: 'flex'}}>
              <h2 style={{fontSize: '16px', color: '#025FCA', cursor: 'pointer', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '3px', zIndex: 1}}>View Courses </h2>
              <svg style={{marginTop: '16px', cursor: 'pointer', zIndex: 1}} fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
            </div>
            
          </div>
          <div style={{backgroundColor: '#edf2fa', width: '100%', borderRadius: '16px', padding: '24px', height: '192px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative'}}>
            <h3 style={{fontSize: '20px', margin: 0}}>Courses for class 6-10</h3>
            <img style={{position: 'absolute', width: '315px', bottom: 0, right: 0}} src={classes} />
            <div style={{display: 'flex'}}>
              <h2 style={{fontSize: '16px', color: '#025FCA', cursor: 'pointer', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '3px', zIndex: 1}}>View Courses </h2>
              <svg style={{marginTop: '16px', cursor: 'pointer', zIndex: 1}} fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
            </div>
            
          </div>
        </div>
      </div>

      <div style={{backgroundColor: '#f7f9ff', width: '100%', height: '114px'}}>

      </div>

    </div>
  )
}

export default App    