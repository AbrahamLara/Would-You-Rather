import React, { Component } from 'react';
import { Context } from './Selector';

class Option extends Component {
	state = {
		// value: 'none',
	}

	render() {
		return (
			<Context.Provider value="Hekko">
				<div className="custom-option">
					{this.props.children}
				</div>
			</Context.Provider>
		);
	}
}

export default Option;