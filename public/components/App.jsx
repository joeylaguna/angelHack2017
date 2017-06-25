import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';
import PostSurvey from './PostSurvey.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      isUserAuth: false,
      isChatComplete: false,
      isPostSurveyComplete: false
    }
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  updateUserInfo(info) {
    this.setState({
      userInfo: info,
      isUserAuth: true
    });
  }

  render() {
    return (
      <div>

        {this.state.isUserAuth ? '' : <AccountLink updateUserInfo={this.updateUserInfo}/>}
        {this.state.isChatComplete ? '' :
          this.state.isUserAuth ? <Chat activeCount={this.state.activeCount} setActiveCount={this.setActiveCount}/> : ''}
        {this.state.isChatComplete ? <PostSurvey /> : ''}

      </div>
    )
  }
}

export default App;