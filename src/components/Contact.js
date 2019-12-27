import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: 'Contact Us',
      act: 0,
      index: '',
      datas: [],
      id: 0,
    }
  }

  componentDidMount() {
    this.refs.fName.focus();
  }

  fSubmit = async (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let fName = this.refs.fName.value;
    let lName = this.refs.lName.value;
    let address = this.refs.address.value;
    let mobilenum = this.refs.mobilenum.value;
    let email = this.refs.email.value;


    //on submission we push the values to our data
    if (this.state.act === 0) {   //new
      let data = {
        fName, lName, address, mobilenum, email
      }
      datas.push(data);
    } 

    else {                      //update
      let index = this.state.index;
      datas[index].fName = fName;
      datas[index].lName = lName;
      datas[index].address = address;
      datas[index].mobilenum = mobilenum;
      datas[index].email = email;
    }

    this.setState({
      datas: datas,
      act: 0
    });


// on submission we use the axios post method to post our data to our database through our api 

      await axios.post('http://localhost:3001/api/contactInfo', {
      datas: {
        fName: fName,
        lName: lName,
        address: address,
        mobileNumber: mobilenum,
        email: email
      }
    })
      //here I'm just logging back the response i get when the data is posted 
      .then(res => console.log(res.datas));

//I'm resetting the form here and focus back up to the name 
    this.refs.myForm.reset();
    this.refs.fName.focus();
  }




  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.fName.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.fName.value = data.fName;
    this.refs.lName.value = data.lName;
    this.refs.address.value = data.address;
    this.refs.mobilenum.value = data.mobilenum;
    this.refs.email.value = data.email;


    this.setState({
      act: 1,
      index: i
    });

    this.refs.fName.focus();
  }


  render() {
    let datas = this.state.datas;
      // const { datas } = this.state
    return (
      <div>
        <div className="contact-info">
          <h2>{this.state.title}</h2>
          <p className="p2">If you have any questions or you want to contact us, please provide us with
           your information below with your comments or questions below. </p>
          <form ref="myForm" className="myForm">
            <input type="text" ref="fName" placeholder="First Name" className="formField" />
            <input type="text" ref="lName" placeholder="Last Name" className="formField" />
            <input type="textfield" ref="address" placeholder="Address" className="formField" />
            <input type="textfield" ref="mobilenum" placeholder="Mobile  Number" className="formField" />
            <input type="textfield" ref="email" placeholder="Email Address" className="formField" />
            <button onClick={(e) => this.fSubmit(e)} className="mySubButton">Submit </button>
          </form>
        </div>
         <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.fName}, {data.lName}, {data.address}, {data.mobilenum}, {data.email} 
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default Contact;

    
          ///List of Contacts with Comments or Questions:
//           {
//             datas.length ?
//             datas.map(contacts => <div key={contacts._id}>{contacts.name}>{contacts.address}>contacts.email) :
//             null
//           }
             
//             )




        //// <pre>
        //   {datas.map((data, i) =>
        //     <li key={i} className="myList">
        //       {i + 1}. {data.name}, {data.address}, {data.mobilenum}, {data.email}
        //       <button onClick={() => this.fRemove(i)} className="myRemovButton">remove </button>
        //       <button onClick={() => this.fEdit(i)} className="myEditButton">edit </button>
        //     </li>
        //   )}
        // </pre>
     // </div>
