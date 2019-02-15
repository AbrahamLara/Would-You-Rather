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
		if (id)
			this.props.dispatch(setAuthedUser(id));
	}

	render () {
		return (
			<div className="LoginWindow">
				<div className="lw-title">Login window</div>
				<Selector onSelect={this.setUser}/>
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