import React, { useEffect, useState } from 'react'
import "./StopwatchClock.css"

const StopwatchClock = () => {
    const [hour,setHour]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);
    const [milliseconds,setMilliseconds]=useState(0);
    const [stop,setStop]=useState(true);

    const onStart=()=>{
        setStop(false);
    }
    const onStop=()=>{
        setStop(true);
    }
    const onReset=()=>{
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
    }
    useEffect(()=>{
        let Interval=null;
        if(!stop){
            Interval= setInterval(()=>{
                if(minutes > 59){
                    setHour(hour+1);
                    setMinutes(0);
                    clearInterval(Interval);
                }
                if(seconds > 59){
                    setMinutes(minutes+1);
                    setSeconds(0);
                    clearInterval(Interval);
                }
                if(milliseconds > 999){
                    setSeconds(seconds+1);
                    setMilliseconds(0);
                    clearInterval(Interval);
                }
                if(milliseconds <= 999){
                    setMilliseconds(milliseconds+1);
                }
                
            })
        }
        else{
            clearInterval(Interval);
        }
        return ()=>{
            clearInterval(Interval);
        }
    })
  return (
    <div className='stopwatch'>
        <div className='stopwatch-container'>
            <h1>{hour}&nbsp; : &nbsp;{minutes}&nbsp; : &nbsp;{seconds}&nbsp; : &nbsp;{milliseconds}</h1>
        </div>
        <button className='start-btn' onClick={onStart}>Start</button>
        <button className='stop-btn' onClick={onStop}>Stop</button>
        <button className='reset-btn' onClick={onReset}>Reset</button>
    </div>
  )
}

export default StopwatchClock