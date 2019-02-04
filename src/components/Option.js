import React, { Component } from 'react';

class Option extends Component {
	render() {
		return (
			<div className="custom-option">
				{this.props.children}
			</div>
		);
	}
}

export default Option;