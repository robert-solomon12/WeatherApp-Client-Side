import React from 'react';
import '../App.css';
import Titles from "./Titles-Section";
import Form from "./Form-Section";
import Temperature from "./Temperature-Section"



//My Weather Api generated from openweather.org
const API_KEY = "a1796d91865e4597b9f8ac69bc32ddc2"

//All components are rendered in within the div tags below 
class WeatherView extends React.Component {



  //Initial State of the fields are left undefined since no info has been requested
  state = {
    cityname: undefined,
    countryname: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    wind_speed: undefined,
    wind_degree: undefined,
  }
  

  getWeatherInfo = async (e) => {

    //to prevent default behaviour of the component when function is called which causes the page to refresh with no change
    e.preventDefault();
    const cityname = e.target.elements.cityname.value;
    const countryname = e.target.elements.countryname.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname},${countryname}&appid=${API_KEY}&units=imperial`);


    //data object created here to call the api_call object that contains the information from the weather api link
    const data = await api_call.json();
    console.log(data)


    
    /*state is being set when button is clicked and a request of information has been
     triggered by the user's button click and fetched from the API*/
    this.setState({
      cityname: data.name,
      countryname: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      wind_degree: data.wind.deg
    });
  }

  

   /* All Components are rendered here to display together in one page of the UI
   */
  render() {
    return (
      <div>
        <header>
        <Titles />
        </header>
        <Form getWeatherInfo={this.getWeatherInfo}/> 
        <Temperature
        cityname={this.state.cityname }
        countryname={this.state.countryname }

        temperature={this.state.temperature }
        description={this.state.description }
        humidity={ this.state.humidity }
        wind_speed={ this.state.wind_speed }
        wind_degree={ this.state.wind_degree }
        />
        </div>
    );
  }
};
  

export default WeatherView;