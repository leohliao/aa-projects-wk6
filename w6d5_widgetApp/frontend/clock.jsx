import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
      this.intervalId.clearInterval();
  }

  render(){
    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();

    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    hours = (hours < 10) ? `0${hours}` : hours;
    return (
      <div>
        <h1> Clock </h1>
          <div className="clock">
            <p>
              <span>Time:</span>
              <span>{`${hours}:${minutes}:${seconds}`}</span>
            </p>
            <p>
              <span>Date:</span>
              <span>{ this.state.time.toDateString()}</span>
            </p>
        </div>
      </div>

    );//return
  }//render
}//class


export default Clock;
