import React from "react";
import './Alarm.css'

class Alarm extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }
  
    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }
  
    checkAlarmClock(){
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Please set your alarm.";
      } else {
        this.alarmMessage = "Your alarm set for " + this.state.alarmTime + ".";
        if(this.state.currentTime === this.state.alarmTime) {
          alert("its time!");
        } else {
          console.log("not yet");
        }
      }   
    }
  
    render() {
      return (
        <div className="alarm-container">
            <img src="https://play-lh.googleusercontent.com/f9NuCxoRwJvMRmn7NkBzNlaE-QUZs9uQJGUZtmUYIXCRZ7rQ-1x1lKeD88hG2M5T9g" style={{height:"100px",width:"100px",textAlign:"center",marginLeft:"120px"}} alt="error" />
          <h2 className="digital-time">Now the time is {this.state.currentTime}.</h2>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
          <h2 className="alarm-msg">{this.alarmMessage}</h2>
        </div>
      );
    }
  }

export default Alarm