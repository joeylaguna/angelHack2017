import React from 'react';
import firebaseApp from './../../db/fb.js';

var RTM = require("satori-rtm-sdk");

class ChatSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      ID: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getID = this.getID.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    var endpoint = "wss://uv6r25xn.api.satori.com";
    var appkey = "4EDedbecd2ab3Aedf6eBCBbC4bBA58AE";
    var role = "default";
    var roleSecretKey = "3EF46ECF5a1d1F365fdF37c0dA9e38d3";
    var channel = "sacangelhack";
    var self = this;

    var rtm = new RTM(endpoint, appkey);

    var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    /* publish a message after being subscribed to sync on subscription */
    subscription.on('enter-subscribed', function () {
      let newMessage = {
        test: self.state.message,
      }
      let temp = newMessage['test'];
      temp = temp.split('');
      temp.unshift('')
      rtm.publish(channel, newMessage, function (pdu) {
        console.log("Publish ack:", pdu);
      });
      
      self.setState({
        message: ''
      });
      rtm.stop();
    });

    rtm.start();
    event.preventDefault();
  }

  getID(context){
    return firebaseApp.database().ref('/users/' + this.props.userID).once('value').then(function(snapshot) {
      var userid = snapshot.val().username;
      context.setState({
        ID: userid
      });
    });
  }

  componentDidMount() {
    this.getID(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <input type="text" value={this.state.message} onChange={this.handleChange}/>
        </label>
        <button type="button" onClick={this.handleSubmit}> Submit</button>
      </form>
    );
  }
}

export default ChatSubmit;