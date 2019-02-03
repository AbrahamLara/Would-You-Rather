import React, { Component } from 'react';
import Selector from './UserSelector';

class LoginWindow extends Component {
	render () {
		return (
			<div className="login-window">
				<div className="title">Login window</div>
				<Selector />
			</div>
		);
	}
}

export default LoginWindow;