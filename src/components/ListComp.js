// import React from 'react';
// import '../App.css';
// import axios from 'axios';

//  export default class ContactList extends React.Component {

//     state = {
//         contacts: [],
//     };

//     componentDidMount() {
//         axios.get('http://localhost:3001/api/contactInfo')
//         //writing a then statement to get back response from the api and logging out the response on the console
//       .then(response => {
//         console.log(response);
//         this.setState({ contacts: response.data });
//       });
//   }


//   render() {
//     return 
//     <ul> {this.state.contacts.map(contact => <li key={contact.id}> {contact.fName} {contact.lName} </li>)}: null</ul> ;
//          }
//      }