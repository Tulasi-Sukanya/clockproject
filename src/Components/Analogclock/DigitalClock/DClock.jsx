import React, { useState } from 'react'
import './DClock.css'

const DClock = () => {
    let time= new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime]=useState(time);
    const updateTime=()=>{
    let time= new Date().toLocaleTimeString();
    setCurrentTime(time) 
    }
    setInterval(updateTime,1000)
  return (
    <div className='dclock'>
        <h2>{currentTime}</h2>
    </div>
  )
}

export default DClock