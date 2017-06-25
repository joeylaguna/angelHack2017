import React from 'react';

var RTM = require("satori-rtm-sdk");
import ReactCountdownClock from 'react-countdown-clock';

import ChatSubmit from './ChatSubmit.jsx';

var EasyQuestion = [' What would constitute a \“perfect\” day for you?', 'What does friendship mean to you?'];
var HardQuestion = ['What\'s your opinion on gun control?', 'Do you support bulding a wall?'];

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [''],
      currentQuestion: EasyQuestion[Math.floor(Math.random() * EasyQuestion.length)],
      nextRound: false
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    this.setState({
      currentQuestion: HardQuestion[Math.floor(Math.random() * HardQuestion.length)],
      nextRound: true,
      messages: ['']
    });
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
        console.log(pdu)
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
        <b>{this.state.currentQuestion}</b>
        {
          this.state.messages.map((message, key) => {
            if(key !== 0){
              return <div> {this.props.userInfo.name + ' : ' + message} </div>
            }
          })
        }
        <div>
          <ChatSubmit />
        </div>
        <div>
        {this.state.messages.length > 1 && !this.state.nextRound ? <ReactCountdownClock seconds={5}
                color="#000"
                alpha={0.9}
                size={300}
                onComplete={this.nextQuestion} /> : ''}
        {this.state.nextRound ? <ReactCountdownClock seconds={5}
                color="#000"
                alpha={0.9}
                size={300}
                onComplete={() => this.props.chatUpdate()} /> : ''}

        </div>
      </div>
    );
  }
}

export default Chat;