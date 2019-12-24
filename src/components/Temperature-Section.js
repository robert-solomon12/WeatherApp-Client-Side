import React from "react";
import './Contact.css';

class Temperature extends React.Component {
    render() {
        return (
            <div>
       <div className="myForm">
    
            <p>City: { this.props.cityname }</p>
            <p>Country: { this.props.countryname }</p>
             <p>Temperature: { this.props.temperature }°C</p>
            <p>Condition: { this.props.description }</p>
            <p>Humidity: { this.props.humidity }%</p>
            <p>Wind Speed: { this.props.wind_speed }Km/h</p>
            <p>Wind degree: { this.props.wind_degree }°</p>
            </div>
            </div>

        
)
}
};

export default Temperature;
