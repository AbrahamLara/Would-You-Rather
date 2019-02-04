import React, { Component } from 'react';
import Selector from './UserSelector';
import '../style/LoginWindow.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginWindow extends Component {
	state = {}

	setUser = (id) => {
		this.setState({ id, });
	}

	authUser = () => {
		const { id } = this.state;
		if (id) this.props.dispatch(setAuthedUser(id));
		else console.log('Select a user.')
	}

	render () {
		return (
			<div className="login-window">
				<div className="title">Login window</div>
				<Selector onSelect={this.setUser}/>
				<button
					className="btn btn-login"
					onClick={this.authUser}
				>
					Login
				</button>
			</div>
		);
	}
}

export default connect()(LoginWindow);