import React, { Component } from 'react';
import './../App.css';

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
            <li className="menu-item">
              <button className="btn">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
