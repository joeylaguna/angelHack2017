import React from 'react';

var RTM = require("satori-rtm-sdk");

import ChatSubmit from './ChatSubmit.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething(value) {
    this.props.setActiveCount(value);
  }

  render() {
    var endpoint = "wss://uv6r25xn.api.satori.com";
    var appkey = "4EDedbecd2ab3Aedf6eBCBbC4bBA58AE";
    var role = "default";
    var roleSecretKey = "3EF46ECF5a1d1F365fdF37c0dA9e38d3";
    var channel = "sacangelhack";
    var self = this;

    var rtm = new RTM(endpoint, appkey);

    var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    /* set callback for PDU with specific action */
    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        console.log('Got message:', msg);
        if(self.state.messages[self.state.messages.length - 1] !== msg.test) {
          self.setState({
            messages: self.state.messages.concat([msg.test])});
          rtm.stop();
      }
      });
      // close client after receving one message
    });
    if(rtm.isStopped()) {
      rtm.start();
    }


    return (
      <div>
        <h1>Inside chat</h1>
        {
          this.state.messages.map((message) => {
            return <div> {message} </div>
          })
        }
        <div>
          <ChatSubmit />
        </div>
      </div>
    );
  }
}

export default Chat;