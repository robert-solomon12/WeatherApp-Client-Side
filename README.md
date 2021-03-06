# React-Weather-Application (Client-Side)

# Overview of the Project

As part of my React Assignment, the objective is to develop a SPA, using React. I developed a minor Weather-Web-Application for my Project. This can be improved alot more but due to the time I had in terms of the assignment, I didn't have the chance to expand the interactivity and design any further. I may update this project in time after it has been graded because I really enjoyed building this Web-Application.


# Setup Installation Instructions as follows
  • Ensure that you have the following steps completed before running the Project: 
   
        <b> git clone this repo</b>
   
        <b> sudo npm install </b>
       
        <b> sudo npm start </b>
          
 
    
# User Interface
   In this Web-App Project you will notice that I have each of the the parts of the one page build in different Components and I'm individually rendering all of them in their respective Views. 

# Weather API  
I'm using the Open Weather API to capture the weather information request based on the city and country name you enter. In this case the Temperature, Humidity, Weather Conditions gets rendered out in real-time at that point in time. Once the user enter's City Name and Country Name and clicks the 'Get Weather Information' Button, the form is processed and sends a 'onSubmit' request with the function name that is then called to retrieve the information.

<img src="IMG/WeatherView.png">

The backend server is built as a seperate project since it serves as a server to the frontend of this React Application and can be found [here](https://github.com/robertsolomon97/WebApp-ServerSide). In the following screenshot, I've connected the Contact Info View of my React App to my backend server using the Axios Library and I'm able to post the data I input here to my to my MongDB Database which persists the data.

<img src="IMG/ContactView.png">


<img src="IMG/WeatherListView.png">


<img src="IMG/AboutView.png">

# Note
On each of the pages I also have a footer rendered out accross all pages with a hyperlink

<img src="IMG/Footer.png">
    
 # Project was built with the assistance of the following Acknowledgements
 - Weather API that I used can be found [here](https://openweathermap.org/api)
 - Labwork Assistance
 - [Search Filtering](https://www.youtube.com/watch?v=OlVkYnVXPl0&list=PL7uQz5cySUq8vRslXnqc8BCwiEg7KaL6X&index=36)
 - [Javascript for Beginners Tutorials](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
 - [Axios help](https://github.com/axios/axios)
 # CRUD Assistance
  - Partial Crud help was found [here](https://www.youtube.com/watch?v=HZkN0LfC5dM&list=PLjW0UGS7gVqd9_BfJBkGAEUguPBeJ-LcE&index=2&t=0s)

# Routing/Navigation Assistance
I also found this very useful to help with the navigation across pages in my webapp which can be found in the following playlist [here](https://www.youtube.com/playlist?list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm)
 
    
<br> Should you have any problems, don't hesitate to contact me on my email at:</br> [20079462@mail.wit.ie](mailto:20079462@mail.wit.ie)
<br>or if you find a bug </br>[open up an issue here](https://github.com/robertsolomon97/WebAppAssignment/issues)


# Future Updates
In future updates I will make the application more flexible and interactive.
