import React, { Component } from 'react';
import './../style/UserSelector.css'

export class Selector extends Component {
	state = {
		toggled: false,
	}

	handleToggle = () => {
		this.setState((currState) => ({
			toggled: !currState.toggled,
		}));
	}

	handleClick = (value) => {
		this.setState({
			toggled: false,
			value: value,
		});
	}

	render () {
		const { toggled, value } = this.state;

		return (
			<div className="custom-select">
				<button
					className={"btn custom-select-display"+(value ? ' text-black' : '')}
					onClick={this.handleToggle}
				>
					{value || 'Select a user'}
				</button>
				<div className={"custom-options-group"+(toggled || ' hidden')}>
					<div className="custom-option" onClick={() => this.handleClick('sarahedo')}>
						<img
							className="user-image"
							alt="profile-pic"
							src="https://randomuser.me/api/portraits/women/18.jpg"
						/>
						<span className="user-name">Sarah Edo</span>
					</div>
					<div className="custom-option" onClick={() => this.handleClick('tylermcginnis')}>
						<img
							className="user-image"
							alt="profile-pic"
							src="https://randomuser.me/api/portraits/men/36.jpg"
						/>
						<span className="user-name">Tyler McGinnis</span>
					</div>
					<div className="custom-option" onClick={() => this.handleClick('johndoe')}>
						<img
							className="user-image"
							alt="profile-pic"
							src="https://randomuser.me/api/portraits/men/89.jpg"
						/>
						<span className="user-name">John Doe</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Selector;