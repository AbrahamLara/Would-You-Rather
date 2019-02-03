import React, { Component, Fragment } from 'react';
import './../style/App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
import LoginWindow from './LoginWindow';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {this.props.loading === true ?
              null
              : <div>
                  <Route path='/' exact component={LoginWindow}/>
                  <Route path='/add' component={NewQuestion}/>
                  <Route path='/leaderboard' component={Leaderboard}/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
