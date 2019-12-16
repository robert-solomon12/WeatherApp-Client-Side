import React from 'react';
import  {Switch, Route}  from 'react-router-dom';


//no js file addon needed for the seperate pages
// import Home from  './Home';
import Contact from './Contact';
import WeatherView from './weatherView';
import About from './About';
// import ContactList from './ListComp';


const Main = () => (
<Switch>
<Route exact path="/" component={WeatherView} />
<Route path="/Contact" component={Contact} />

<Route path="/weatherView" component={WeatherView} />
<Route path="/About" component={About} />

</Switch>

)

export default Main;