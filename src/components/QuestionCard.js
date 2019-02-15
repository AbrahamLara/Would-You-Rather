import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/QuestionCard.css';
import { Link } from 'react-router-dom';
import { formatQuestionCard } from '../utils/helpers';

class QuestionCard extends Component {
	render() {
		const { id, author, optionOne, avatarURL } = this.props.question;
		return (
			<div className='QuestionCard'>
				<div className='questioncard-header'>
					Asked by {author}:
				</div>
				<div className='questioncard-info'>
					<div className='questioncard-profile-image-container'>
						<img className='questioncard-profile-image' alt='profile-pic' src={avatarURL} />
					</div>
					<strong className='questioncard-posed-label'>Would you rather</strong>
					<div className='questioncard-short-text'>{optionOne.text}</div>
					<Link to={`/question/${id}`} className='btn questioncard-btn-view-poll'>
						View Poll
					</Link>
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