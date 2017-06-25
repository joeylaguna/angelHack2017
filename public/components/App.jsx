import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      matched: false
    }
  }
  render() {
    return (
      <div>
        <AccountLink />
        {this.state.matched ? <AccountSummary /> : ''}
        {this.state.matched ? <Chat /> : ''}
      </div>
    )
  }
}

export default App;