import React from 'react';
import axios from 'axios';
//import admin from 'firebase-admin';
import firebaseApp from './../../db/fb.js';

class AccountLink extends React.Component {
	constructor(){
		super();
		this.state = {
			name: '',
      gender: '',
      age: '',
      ethnicity: '',
      sexualOrientation: '',
      religiousBackground: '',
      politicalPreference: '',
      twitterID: ''
		}
 	 	this.handleInputChange = this.handleInputChange.bind(this);
 	 	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      [name]: value,
      [name]: value,
      [name]: value,
      [name]: value,
      [name]: value,
      [name]: value,
      [name]: value
    });
  }

  handleSubmit(event) {
  	console.log('entered')
   	event.preventDefault();
  	if(this.state.twitterID !== '') {
  		axios.post('/api/tweet/' + this.state.twitterID).then(response => {
        console.log('hereee');
  			console.log(response)
        let politcalStuff = response.data;
        this.setState({
          politicalPreference: politcalStuff
        });
        console.log(politcalStuff);
  		})
  	}
    this.props.updateUserInfo(this.state);
    firebaseApp.database().ref(`/users/${this.props.userID}`).set({
      username: this.state.name
    });


    // var newData = {
    //   id: key,
    //   name: this.state.name
    // }
    // myRef.push(newData);
	}


  render() {
    return (
      <div>
        <h1>Inside accountLink</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            checked={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Gender:
          <input
            name="gender"
            type="text"
            value={this.state.gender}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Ethnicity:
          <input
            name="ethnicity"
            type="text"
            value={this.state.ethnicity}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Sexual Orientation:
          <input
            name="sexualOrientation"
            type="text"
            value={this.state.sexualOrientation}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
         	Religious Background:
          <input
            name="religiousBackground"
            type="text"
            value={this.state.religiousBackground}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
         	Political Preference:
          <input
            name="politicalPreference"
            type="text"
            value={this.state.politicalPreference}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
         	TwitterID:
          <input
            name="twitterID"
            type="text"
            value={this.state.twitterID}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>


      </div>
    );
  }
}

export default AccountLink;