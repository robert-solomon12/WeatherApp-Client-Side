import React from 'react';
import '../App.css';
import axios from 'axios';
import Form from './UserForm';


export default class ContactList extends React.Component {


//Basic constructor to setting the initial states of the variables to null before any activity is made in the search textfield

constructor() {
  super();
  this.state = {
    weatherInfos: [],
    search: ''
  };
}


//search method call function when setting the 'search' state when an activity is made in the search input textfield
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,
      10)});
    console.log('working')
  }


//using axios with the get method to call the api and log back a response to the console 
    componentDidMount() {
    axios.get(`http://localhost:3001/api/weatherInfos`)
      .then(res => {
        const weatherInfos = res.data;
        //setting the res
        this.setState({ weatherInfos });
      })
  }

 render() {

   let filteredWeatherList = this.state.weatherInfos.filter(
    (weatherInfo) => {
      return weatherInfo.cityname.toLowerCase().indexOf(
        this.state.search.toLowerCase()) !== -1;
    }
);

    return (

      <div className="contact-info">
<header>
<h1>Weather List of Queries made from the Weather App</h1>
</header>
      <ul>
        { filteredWeatherList.map(weatherInfo => <li> City: {weatherInfo.cityname}, Coutry: {weatherInfo.countryname}, Description: {weatherInfo.description}, humidity: {weatherInfo.humidity}, Wind Degree: {weatherInfo.wind_degree}</li>) }
      </ul>
      <div className="myForm">
      <input type="text" value={this.state.search} placeholder="Filter by City"
       onChange={this.updateSearch.bind(this)} />
       </div>
      </div>
    )
  }
}

