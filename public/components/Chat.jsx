import React from 'react';
var RTM = require("satori-rtm-sdk");

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ["message1"]
    }
  }

  render() {
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

    /* set callback for PDU with specific action */
    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        console.log('Got message:', msg);
        self.setState({
          messages: self.state.messages.concat([msg.test])});
      });
      // close client after receving one message
    });

    rtm.start();

    return (
      <div>
        <h1>Inside chat</h1>
        {
          this.state.messages.map((message) => {
            return <div> {message} </div>
          })
        }
      </div>
    );
  }
}

export default Chat;