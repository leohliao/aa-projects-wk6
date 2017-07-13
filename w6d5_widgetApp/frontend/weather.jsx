import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }//constructor

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }//componentDidMount

  getWeather(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let apiId = '&APPID=ed7a67add81b3012a5c287c6bd028891';
    url += `lat=${latitude}`;
    url += `&lon=${longitude}`;
    url += apiId;

    let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
          this.setState({ weather: JSON.parse(xmlhttp.responseText) });
        }//if
      };//onreadystatechange
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }//getWeather


  render(){
    let content = <div></div>;
    if (this.state.weather){
      let weather = this.state.weather;
      let temp = Math.floor((weather.main.temp) - 273.15);
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp}˚C</p>
                </div>;
    } else {
      content = <div className='loading'>loading weather info....</div>;
    }

    return (
      <div>
        <h1>Weather</h1>
          <div className='weather'>
            {content}
          </div>
      </div>
    );//return
  }//render

}//class

export default Weather;
