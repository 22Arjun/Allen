import React from 'react'


export const CourseCard = ({ streamHeading, streamImage }) => {

    
  return (
<div style={{backgroundColor: '#edf2fa', width: '100%', borderRadius: '20px', padding: '24px', height: '192px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative'}}>
    <h3 style={{fontSize: '20px', margin: 0}}>{streamHeading}</h3>
    <img style={{position: 'absolute', width: '315px', bottom: 0, right: 0}} src={streamImage} />
    <div style={{display: 'flex'}}>
        <h2 style={{fontSize: '16px', color: '#025FCA', cursor: 'pointer', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '3px', zIndex: 1}}>View Courses </h2>
        <svg style={{marginTop: '16px', cursor: 'pointer', zIndex: 1}} fill={"none"} height={"24" }viewBox={"0 0 20 20"} width={"24"} xmlns={"http://www.w3.org/2000/svg"}><path d={"M7.5 15L12.5 10L7.5 5"} stroke={"#0266DA"} stroke-linecap={"round"} stroke-linejoin={"round"} stroke-width={"1.5"}></path></svg>
    </div> 
</div>
  )
}
