import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Carousel } from './components/Carousel';
import './App.css';
import loud from './assets/loud.png';
import shine from './assets/star.webp';
import frame0 from './assets/frame1.webp'
import frame1 from './assets/frame2.webp'
import frame2 from './assets/frame3.webp'
import frame3 from './assets/frame4.webp'
import arrow from './assets/arrow.webp';
import classes from './assets/classes.webp';
import JEE from './assets/JEE Courses.webp';
import NEET from './assets/Neet Courses.webp';
import original from './assets/original.png';
import Banner0 from './assets/Banner0.webp';
import Banner1 from './assets/Banner1.webp';
import Banner2 from './assets/Banner2.webp';
import Banner3 from './assets/Banner3.webp';
import Banner4 from './assets/Banner4.webp';
import Banner5 from './assets/Banner5.jpg';
import onlineBanner0 from './assets/onlineBanner0.png';
import onlineBanner1 from './assets/onlineBanner1.png'

import { CourseCard } from './components/CourseCard';
import { ClickButton } from './components/ClickButton';
import { BatchSelect } from './components/BatchSelect';


// import { BrowserRouter, Router, Route } from 'react-router-dom';
const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState({});
  const [activeDot, setActiveDot] = useState(0);
  const [activeOnline, setActiveOnline] = useState(0);

  const data = [
    {img: NEET, h3: 'NEET Courses'},
    {img: JEE, h3: 'JEE Courses'},
    {img: classes, h3: 'Courses for class 6-10'}
  ]

  const frames = [frame0, frame1, frame2, frame3];


  const carouselStyles = {
    width: '1032px',
    margin: '0 auto',
    height: '350px',
    backgroundColor: 'transparent',
    marginTop: '80px',
    borderRadius: '34px'
  }


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
    setActiveIndex(prevIndex => (prevIndex < 3 ? prevIndex + 1 : 0));
    setActiveDot(prevIndex => prevIndex < 5 ? prevIndex + 1 : 0);
  }, 7000)
  return () => clearInterval(interval);
}, [activeIndex, activeDot]);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveOnline(prevIndex => prevIndex < 1 ? prevIndex + 1 : 0);
  }, 5000)

  return () => clearInterval(interval);
}, [activeOnline])

const buttonData = [
    { text : 'NEET' },
    { text : 'JEE' },
    { text : 'Class 6-10' }
  ]

  
  const banner = [Banner0, Banner1, Banner2, Banner3, Banner4, Banner5];
  
  const bannerStyles = {
    width: '1032px',
    margin: '0 auto',
    height: '350px',
    backgroundColor: 'transparent',
    marginTop: '0px',
    borderRadius: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }


  const bannerDotStyles = {
    backgroundColor: '#0F0F0F33',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out'
  }


  const onlineBanner = [onlineBanner0, onlineBanner1];

  return (
    <div className='wrapper'>
      <Nav></Nav>
      <div style={{width: '100%', height: '40px', backgroundColor: '#019370', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', userSelect: 'none', position: 'sticky', top: '72px', zIndex: 9999}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img width={32} draggable={false} src={loud} alt={"Speaker"} style={{aspectRatio: '1/1'}} />
          <span style={{color: '#F8FD05', fontSize: '12px', fontWeight: 600}}>LAST CHANCE TO GET 15% OFF</span>
        </div>
        <img width={24} height={24} src={shine} alt={'Shining'} />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span style={{fontSize: '14px', color: '#FFFF', fontWeight: 600, marginLeft: '12px', marginRight: '12px', padding: '12px 0px'}}>Extended Early Bird Offer ends 28th Jan</span>
          <img width={24} height={24} src={arrow} alt={"arrow"} />
        </div>
      </div>
      <div style={{backgroundColor: '#edf2fa', display: 'flex', flexDirection: 'column', paddingBottom: '50px'}}>
        <Carousel images={frames} carouselStyles={carouselStyles} arrayIndex={activeIndex}></Carousel>
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

      <div style={{backgroundColor: '#f7f9ff', width: '100%', height: '114px', padding: '16px 0'}}>
        <div style={{width: '1032px', display: 'flex', flexDirection: 'column', margin: '0 auto', userSelect: 'none'}}>
          <h2>Trending Courses</h2>
          <div style={{display: 'flex', gap: '12px'}}>
            {buttonData.map((button, index) => ( <ClickButton 
              key={index}
              onClick={() => setActiveButton(index)}
              text={button.text}
              isActive={activeButton===index}
            />

            ))}
            
          </div>
        </div>
      </div>
      

      <div style={{backgroundColor: '#edf2fa'}}>
        <div style={{backgroundColor: '#edf2fa', width: '1032px', height: '471.5px', margin: '0 auto', display: 'flex', gap: '1.5rem', padding: '20px 0px'}}>
          <BatchSelect />
          <BatchSelect />
        </div>
      </div>

      <div style={{backgroundColor: '#edf2fa', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '32px 0px 8px'}}>
        <button className='viewAllCoursesBtn' style={{height: '44px', width: '150px', borderRadius: '9999px', border: 'none', fontSize: '.875rem', fontWeight: 700, textAlign: 'center', cursor: 'pointer'}}>View All Courses</button>
      </div>

      <div className="container-v1" style={{display: 'flex', backgroundColor: '#edf2fa'}}>
        <img width={'1032px'} src={original} style={{margin: '0 auto', padding: '2.25rem 0'}} />
      </div>

      <div style={{display: 'flex', backgroundColor: '#edf2fa'}}>
        <section style={{width: '1032px', margin: '0 auto', padding: '48px 0', display: 'flex', flexDirection: 'column'}}>
          <h2 style={{lineHeight: '30px', margin: '0 auto'}}>What's Trending</h2>
          <Carousel 
          images={banner}
          arrayIndex={activeDot}
          carouselStyles={bannerStyles}
          />
          <div style={{display: 'flex', gap: '.85rem', justifyContent: 'center', alignItems: 'center'}}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
              onClick={() => (setActiveDot(index))}
              style={{...bannerDotStyles, backgroundColor: activeDot === index ? activeColor : inactiveColor, width: (activeDot === 5 || activeDot === 4 )&& index > 2 ? '12px' : (activeDot === 5 || activeDot === 4)&& index === 2 ? '8px' : (activeDot === 5 || activeDot === 4)&& index < 2 ? '6px' : (activeDot === 2 || activeDot === 3) && (index === 1 || index === 4) ? '8px' : (activeDot === 2 || activeDot === 3) && (index === 0 || index === 5) ? '6px' : (activeDot === 2 || activeDot === 3) && (index === 2 || index === 3) ? '12px' : (activeDot === 0 || activeDot === 1) && index < 3 ? '12px' : (activeDot === 0 || activeDot === 1) && index > 3 ? '6px' : '8px', height : (activeDot === 5 || activeDot === 4 )&& index > 2 ? '12px' : (activeDot === 5 || activeDot === 4)&& index === 2 ? '8px' : (activeDot === 5 || activeDot === 4)&& index < 2 ? '6px' : (activeDot === 2 || activeDot === 3) && (index === 1 || index === 4) ? '8px' : (activeDot === 2 || activeDot === 3) && (index === 0 || index === 5) ? '6px' : (activeDot === 2 || activeDot === 3) && (index === 2 || index === 3) ? '12px' : (activeDot === 0 || activeDot === 1) && index < 3 ? '12px' : (activeDot === 0 || activeDot === 1) && index > 3 ? '6px' : '8px'}}
              ></div>
            ))}
          </div>
        </section>
      </div>


      <div style={{display: 'flex', backgroundColor: '#edf2fa'}}>
        <section style={{width: '1032px', margin: '0 auto', padding: '48px 0', display: 'flex', flexDirection: 'column'}}>
          <h2 style={{lineHeight: '30px', margin: '0 auto'}}>Meet Our 2024 Champions</h2>
          <Carousel 
          images={onlineBanner}
          arrayIndex={activeOnline}
          carouselStyles={carouselStyles}
          />
          <div style={{display: 'flex', gap: '.85rem', justifyContent: 'center', alignItems: 'center'}}>
            {[0, 1].map((index) => (
              <div 
              onClick={() => (setActiveOnline(index))}
              style={{...dotStyles, backgroundColor: activeOnline === index ? activeColor : inactiveColor}}
              ></div>
            ))}
          </div>
        </section>
      </div>  


    </div>
  )
}

export default App    