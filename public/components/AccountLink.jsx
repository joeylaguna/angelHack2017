import React from 'react';
import axios from 'axios';

var RTM = require("satori-rtm-sdk");

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
      twitterID: '',
      otherName: '',
      otherGender: '',
      otherAge: '',
      otherEthnicity: '',
      otherSexualOrientation: '',
      otherReligiousBackground: '',
      otherPoliticalPreference: '',
      otherTwitterID: ''
		}
 	 	this.handleInputChange = this.handleInputChange.bind(this);
 	 	this.handleSubmit = this.handleSubmit.bind(this)
  }

  findPartner() {
    var endpoint = "wss://uv6r25xn.api.satori.com";
    var appkey = "4EDedbecd2ab3Aedf6eBCBbC4bBA58AE";
    var role = "default";
    var roleSecretKey = "3EF46ECF5a1d1F365fdF37c0dA9e38d3";
    var channel = "waitingroom";
    var self = this;

    var rtm = new RTM(endpoint, appkey);

    var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    /* set callback for PDU with specific action */
    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        console.log('Got message:', msg);
        if(self.state.name !== msg.name) {
          self.setState({
            otherName: msg.name,
            otherGender: msg.gender,
            otherAge: msg.age,
            otherEthnicity: msg.ethnicity,
            otherSexualOrientation: msg.sexualOrientation,
            otherReligiousBackground: msg.religiousBackground,
            otherPoliticalPreference: msg.politcalStuff,
            otherTwitterID: msg.twitterID});
          rtm.stop();
      }
      });
      // close client after receving one message
    });
    if(rtm.isStopped()) {
      rtm.start();
    }
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
    var endpoint = "wss://uv6r25xn.api.satori.com";
    var appkey = "4EDedbecd2ab3Aedf6eBCBbC4bBA58AE";
    var role = "default";
    var roleSecretKey = "3EF46ECF5a1d1F365fdF37c0dA9e38d3";
    var channel = "waitingroom";
    var self = this;

    var rtm = new RTM(endpoint, appkey);

    var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    /* publish a message after being subscribed to sync on subscription */
    subscription.on('enter-subscribed', function () {
      let newMessage = {
        name: self.state.name,
        gender: self.state.gender,
        age: self.state.age,
        ethnicity: self.state.ethnicity,
        sexualOrientation: self.state.sexualOrientation,
        religiousBackground: self.state.religiousBackground,
        politicalPreference: self.state.politicalPreference,
        twitterID: self.state.twitterID
      };
      rtm.publish(channel, newMessage, function (pdu) {
        console.log("Publish ack:", pdu);
      });
      rtm.stop();

    });
    rtm.start();
    this.props.updateUserInfo(this.state);
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