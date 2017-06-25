import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';
import PostSurvey from './PostSurvey.js'
import Summary from './Summary.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      isUserAuth: false,
      isChatComplete: false,
      isPostSurveyComplete: false,
      userID: '',
      postSurveyInfo: {}
    }
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.completeChat = this.completeChat.bind(this);
    this.createUserID = this.createUserID.bind(this);
    this.updatePostSurveyInfo = this.updatePostSurveyInfo.bind(this);
  }

  updatePostSurveyInfo(info) {
    this.setState({
      postSurveyInfo: info,
      isPostSurveyComplete: true
    })
    console.log(this.state)
  }
  updateUserInfo(info) {
    this.setState({
      userInfo: info,
      isUserAuth: true
    });
  }

  completeChat(){
    this.setState({
      isChatComplete: true
    })
  }

  createUserID() {
    let id = Math.floor(Math.random(100000) * 100000);
    this.setState({
      userID: id
    });
  }

  componentDidMount(){
    this.createUserID();
  }

  render() {
    return (
      <div>

        {this.state.isUserAuth ? '' : <AccountLink updateUserInfo={this.updateUserInfo} userID={this.state.userID}/>}
        {this.state.isChatComplete ? '' :
          this.state.isUserAuth ? <Chat chatUpdate = {this.completeChat}  userID={this.state.userID} userInfo={this.state.userInfo}/>: ''}
        {this.state.isChatComplete ? <PostSurvey postInfo = {this.updatePostSurveyInfo}/> : ''}
        {this.state.isPostSurveyComplete ? <Summary summary = {this.state}/>  : ''}

      </div>
    )
  }
}

export default App;