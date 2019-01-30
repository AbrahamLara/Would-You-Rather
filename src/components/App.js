import React, { Component } from 'react';
import './../style/App.css';
import Selector from './UserSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-link" href="#">Home</a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">New Question</a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">Leaderboard</a>
            </li>
          </ul>
          <ul className="menu sub-menu">
            <li className="menu-item no-rm">
              <button className="btn bg-light-blue">Login</button>
            </li>
          </ul>
        </nav>
        <div className="login-window">
          <div className="title">Login window</div>
          <Selector />
        </div>
      </div>
    );
  }
}

export default App;
