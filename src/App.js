import React, { Component } from 'react';
import logo from './logo.svg';

import './App.scss';

class App extends Component {
  render() {
    const obj = {
      a: '1',
      b: '2',
    };
    const a = { c: '2', ...obj };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Super Novel Reader - Admin</p>
        </header>
      </div>
    );
  }
}

export default App;
