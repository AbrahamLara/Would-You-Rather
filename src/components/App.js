import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import './../style/App.css';
import Nav from './Nav';
import LoginWindow from './LoginWindow';
import NewQuestion from './NewQuestion';
import LeaderBoard from './Leaderboard';
import ViewQuestions from './ViewQuestions';
import QuestionPage from './QuestionPage';

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
              : <div className='app-container'>
                  <Route path='/' exact component={!authedUser ? LoginWindow : ViewQuestions}/>
                  <Route path='/add' component={!authedUser ? LoginWindow : NewQuestion}/>
                  <Route path='/leaderboard' component={!authedUser ? LoginWindow : LeaderBoard}/>
                  <Route path='/question/:id' component={!authedUser ? LoginWindow : QuestionPage}/>
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
