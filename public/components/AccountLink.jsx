import React from 'react';
import axios from 'axios';

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
    console.log('name', name)

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
    console.log(this.state)
  }

  handleSubmit(event) {
  	console.log('entered')
  	event.preventDefault();
  	if(this.state.twitterID !== '') {
  		axios.post('/api/tweet/' + this.state.twitterID).then(response => {
  			console.log(response)
  		})
  	}
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