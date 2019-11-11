import React from "react";

const Form = props => (
	<form onSubmit={props.getWeatherInfo}>
		<input type="text" name="cityname" placeholder="City"/>
		<input type="text" name="countryname" placeholder="Country"/>
		<button >Get Weather Information</button>
	</form>
);

export default Form;