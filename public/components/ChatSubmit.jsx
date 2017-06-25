import React from 'react';
var RTM = require("satori-rtm-sdk");

class ChatSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    var endpoint = "wss://open-data.api.satori.com";
    var appkey = "B1c1F2BfAC806D6daFC3D4Fa4A4B00ED";
    var role = "sacangelhack";
    var roleSecretKey = "3EF46ECF5a1d1F365fdF37c0dA9e38d3";
    var channel = "sacangelhack";
    var self = this;

    var roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

    var rtm = new RTM(endpoint, appkey, {
      authProvider: roleSecretProvider,
    });

    var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    /* publish a message after being subscribed to sync on subscription */
    subscription.on('enter-subscribed', function () {
      let newMessage = {
        test: self.state.message
      }
      console.log(newMessage)
      rtm.publish(channel, newMessage, function (pdu) {
        console.log("Publish ack:", pdu);
      });
    });

    rtm.start();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Inside chat teapot</h1>
        <form>
          <label>
            Message:
            <input type="text" value={this.state.message} onChange={this.handleChange}/>
          </label>
          <button type="button" onClick={this.handleSubmit}> Submit</button>
        </form>
      </div>
    );
  }
}

export default ChatSubmit;