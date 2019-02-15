import React, { Component } from 'react';
import './../style/UserSelector.css';
import { connect } from 'react-redux';

class Selector extends Component {
	state = {
		toggled: false,
	}

	handleToggle = () => {
		this.setState((currState) => ({
			toggled: !currState.toggled,
		}));
	}

	handleClick = (value, id) => {
		this.props.onSelect(id);

		this.setState({
			toggled: false,
			value: value,
		});
	}

	render () {
		const { toggled, value } = this.state;
		const { users } = this.props;

		return (
			<div className="UserSelector">
				<button
					className={"btn us-dropdown-button"+(value ? ' us-text-black' : '')}
					onClick={this.handleToggle}
				>
					{value || 'Select a user'}
				</button>
				<div className={"us-options-group"+(toggled ? '' : ' us-hidden')}>
					{Object.keys(users).map((k, i) => (
						<div key={k+i} className="us-option" onClick={() => this.handleClick(users[k].name, k)}>
							<img
								className="us-option-user-image"
								alt="profile-pic"
								src={users[k].avatarURL}
							/>
							<span className="us-option-user-name">{users[k].name}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ authedUser, users }) {
	return {
		authedUser,
		users,
	}
}

export default connect(mapStateToProps)(Selector);