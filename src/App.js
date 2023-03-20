import React from 'react'
import Alarm from './Components/Analogclock/AlarmClock/Alarm'
import './Components/Analogclock/Clock'
import Clock from './Components/Analogclock/Clock'
import DClock from './Components/Analogclock/DigitalClock/DClock'
import StopwatchClock from './Components/Analogclock/Stopwatch/StopwatchClock'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"#fff",textDecoration:"underline",fontWeight:"bold"}}>Clock Project</h1>
      <Clock /><br/><br/>
      <DClock />
      <StopwatchClock />
      <Alarm />
    </div>
  )
}

export default App