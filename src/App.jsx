import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Carousel } from './components/Carousel';
import './App.css';
import loud from './assets/loud.png';
import shine from './assets/star.webp';
import arrow from './assets/arrow.webp';
import classes from './assets/classes.webp';
import JEE from './assets/JEE Courses.webp';
import NEET from './assets/Neet Courses.webp';
import { CourseCard } from './components/CourseCard';
import { ClickButton } from './components/ClickButton';

// import { BrowserRouter, Router, Route } from 'react-router-dom';
const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState({});

  const data = [
    {img: NEET, h3: 'NEET Courses'},
    {img: JEE, h3: 'JEE Courses'},
    {img: classes, h3: 'Courses for class 6-10'}
  ]


  const dotStyles = {
    borderRadius: '50%', 
    width: '12px', 
    height: '12px', 
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-out'
  }

 

  const activeColor='#1C1D1D';
  const inactiveColor='#0F0F0F33';


useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prevIndex => (prevIndex < 3 ? prevIndex + 1 : 0))
  }, 7000)
  return () => clearInterval(interval);
}, [activeIndex]);


const buttonData = [
    { text : 'NEET' },
    { text : 'JEE' },
    { text : 'Class 6-10' }
  ]

  const activeStyles = {
        border: '1px solid #0266da',
        backgroundColor: '#D5E8FF',
        color: '#1E1E22'
    }
  


  return (
    <div className='wrapper'>
      <Nav></Nav>
      <div style={{width: '100%', height: '40px', backgroundColor: '#019370', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', userSelect: 'none'}}>
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
        <Carousel activeIndex={activeIndex}></Carousel>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '14px'}}>

          {[0, 1, 2, 3].map((index) => (
            <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{...dotStyles, backgroundColor: index===activeIndex ? activeColor : inactiveColor}}
            ></div>
          ))}

        </div>
      </div>

      <div style={{width: '1032px', display: 'flex', flexDirection: 'column', margin: '0 auto', userSelect: 'none'}}>
        <h2 style={{margin: 0, marginTop: '52px', fontSize: '24px'}}>Pick the right course for you</h2>

      {/* Course Cards */}
        <div style={{padding: '24px 0 0 0', display: 'flex', backgroundColor: 'white', gap: '36px', paddingBottom: '50px'}}>

            {data.map((prev, index) => (
              <CourseCard 
                key={index}
                streamHeading={prev.h3}
                streamImage={prev.img}
              />
            ))}



        </div>
      </div>

      <div style={{backgroundColor: '#f7f9ff', width: '100%', height: '114px'}}>
        <div style={{width: '1032px', display: 'flex', flexDirection: 'column', margin: '0 auto', userSelect: 'none'}}>
          <h2>Trending Courses</h2>
          <div style={{display: 'flex', gap: '12px'}}>
            {buttonData.map((button, index) => ( <ClickButton 
              key={index}
              onClick={() => setActiveButton(index)}
              text={button.text}
              style={{...(activeButton===index ? activeStyles : {})}}
            />

            ))}
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default App    