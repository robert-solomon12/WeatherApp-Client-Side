import React from "react";

class Temperature extends React.Component {
    render() {
        return (
    <div className="temperature">
        <div className="degree-section">
        <h2 className="temperature-degree">
            { this.props.temperature }</h2>
            <span>°C</span>
        </div>
            <div className="temperature-description">
            <p>City: { this.props.cityname }</p>
            <p>Country: { this.props.countryname }</p>
            <p>Condition: { this.props.description }</p>
            <p>Humidity: { this.props.humidity }%</p>
            <p>Wind Speed: { this.props.wind_speed }km/h</p>
            <p>Wind degree: { this.props.wind_degree }°</p>
            </div>
            </div>
)
}
};

export default Temperature;