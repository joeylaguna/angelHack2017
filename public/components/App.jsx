import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCount: 0,
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
        <AccountLink updateUserInfo={this.updateUserInfo}/>
        {this.state.isUserAuth ? <Chat activeCount={this.state.activeCount} setActiveCount={this.setActiveCount}/> : ''}
      </div>
    )
  }
}

export default App;