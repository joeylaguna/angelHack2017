import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      matched: false,
      activeCount: 0

    }

    this.setActiveCount = this.setActiveCount.bind(this);
  }

  setActiveCount() {
    let currentCount = this.state.activeCount;
    currentCount +=1;
    this.setState({
      activeCount: currentCount
    });
  }



  render() {
    return (
      <div>
        <AccountLink />
        {this.state.activeCount}
        {this.state.matched ? <AccountSummary /> : ''}
        {this.state.matched ? <Chat activeCount={this.state.activeCount} setActiveCount={this.setActiveCount}/> : ''}
        {this.state.matched ? <PostSurvey /> }
      </div>
    )
  }
}

export default App;