import React from 'react'
import './clock.css'

const Clock = () => {
  const deg=6;
  const hr=document.querySelector('#hr');
  const min=document.querySelector('#min');
  const sec=document.querySelector('#sec');

  setInterval(()=>{
    let date=new Date();
    let hrs=date.getHours() * 30;
    let mn=date.getMinutes() * deg;
    let sc=date.getSeconds() * deg;

    hr.style.transform=`rotateZ(${hrs + mn / 12}deg)`;
    min.style.transform=`rotateZ(${mn}deg)`;
    sec.style.transform=`rotateZ(${sc}deg)`;
  })
  return (
    <>
      <div className='clock-container'>
        <div className='no-bg'></div>
        <div className='hour'>
            <div className='hr' id="hr"></div>
        </div>
        <div className='minutes'>
            <div className='min' id="min"></div>
        </div>
        <div className='seconds'>
            <div className='sec' id="sec"></div>
        </div>
      </div>
    </>
  )
}

export default Clock