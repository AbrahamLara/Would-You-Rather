import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/Question.css';

class UnQuestion extends Component {
	render() {
		const { author, optionOne } = this.props.question;
		return (
			<tr>
				<td className='QuestionCard' colSpan='2'>
					<div className='header'>
						{author} asks:
					</div>
					<div className='card-info'>
						<div className='profile-image-container'>
							<img className='profile-image' src={logo} />
						</div>
						<strong>Would you rather</strong>
						<div className='short-text'>{optionOne.text}</div>
						<button className='btn btn-view-poll'>View Poll</button>
					</div>
				</td>
			</tr>
		);
	}
}
 
export default UnQuestion;