import React, { Component } from 'react';
import UserSelector from './UserSelector';
import '../style/LoginWindow.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginWindow extends Component {
	setUser = (id) => {
		this.setState({ id, });
	}

	// Once the user clicks 'login'
	// the setAuthedUser action is dispatched
	// with the selected user id
	// to update state and set an authenticated
	// user 
	authUser = () => {
		const { id } = this.state;
		if (id)
			this.props.dispatch(setAuthedUser(id));
	}

	render () {
		return (
			<div className="LoginWindow">
				<div className="lw-title">Login window</div>
				<UserSelector onSelect={this.setUser}/>
				<button
					className="btn lw-btn-login"
					onClick={this.authUser}
				>
					Login
				</button>
			</div>
		);
	}
}

export default connect()(LoginWindow);