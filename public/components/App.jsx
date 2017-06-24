import React from 'react';
import AccountLink from './AccountLink.jsx';
import AccountSummary from './AccountSummary.jsx';
import Chat from './Chat.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <AccountLink />
        <AccountSummary />
        <Chat />
      </div>
    )
  }
}

export default App;