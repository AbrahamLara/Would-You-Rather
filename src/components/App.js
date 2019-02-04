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
    const { loading, authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {loading === true ?
              null
              : <div>
                  <Route path='/' exact component={authedUser ===  'none' ? LoginWindow : null}/>
                  <Route path='/add' component={authedUser ===  'none' ? LoginWindow : NewQuestion}/>
                  <Route path='/leaderboard' component={authedUser ===  'none' ? LoginWindow : Leaderboard}/>
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
    authedUser,
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
