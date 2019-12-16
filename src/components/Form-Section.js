import React from "react";
import './Contact.css';


class Form extends React.Component {
    render() {
        return (
	<form className="myForm" onSubmit={this.props.getWeatherInfo} >
		<input type="textfield" name="cityname" placeholder="City"/>
		<input type="textfield" name="countryname" placeholder="Country"/>
		<button className="mySubButton">Get Weather Information</button>
	</form>

        
)
}
};

export default Form;

        // let weatherInfos = [];
        // // example {id:1592304983049, title: 'Deadpool', year: 2015}
        // const addWeatherReq = (ev)=>{
        //     ev.preventDefault();  //to stop the form submitting
        //     let weatherReq = {
        //         id: Date.now(),
        //         cityname: document.getElementById('cityname').value,
        //         countryname: document.getElementById('countryname').value
        //         commentary: document.getElementById('commentary').value
        //     }
        //     weatherInfos.push(weatherReq);
        //     document.forms[0].reset(); // to clear the form for the next entries
        //     //document.querySelector('form').reset();
        //     //for display purposes only
        //     console.warn('added' , {weatherReq} );
        //     let pre = document.querySelector('#msg pre');
        //     pre.textContent = '\n' + JSON.stringify(weatherReq, '\t', 2);
        //     //saving to localStorage
        //     localStorage.setItem('./src/weather-info-db.json', JSON.stringify(weatherReq) );
        // }
        // document.addEventListener('DOMContentLoaded', ()=>{
        //     document.getElementById('btn').addEventListener('click', addWeatherReq);


// /* <input type="text" name="firstname" placeholder="First name"/>
//  <input type="text" name="lastname" placeholder="Last Name"/> */