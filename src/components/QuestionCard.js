import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/QuestionCard.css';
import { formatQuestionCard } from '../utils/helpers';

class QuestionCard extends Component {
	render() {
		const { id, author, optionOne, avatarURL } = this.props.question;
		return (
			<div className='QuestionCard'>
				<div className='header'>
					{author} asks:
				</div>
				<div className='card-info'>
					<div className='profile-image-container'>
						<img className='profile-image' src={avatarURL} />
					</div>
					<strong>Would you rather</strong>
					<div className='short-text'>{optionOne.text}</div>
					<button className='btn btn-view-poll'>View Poll</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: formatQuestionCard(question, users[question.author]),
	}
}
 
export default connect(mapStateToProps)(QuestionCard);