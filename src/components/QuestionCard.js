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
				<div className='qc-header'>
					Asked by {author}:
				</div>
				<div className='qc-info'>
					<div className='qc-profile-image-container'>
						<img className='qc-profile-image' alt='profile-pic' src={avatarURL} />
					</div>
					<strong className='qc-posed-label'>Would you rather</strong>
					<div className='qc-short-text'>{optionOne.text}</div>
					<Link to={`/question/${id}`} className='btn qc-btn-view-poll'>
						View Poll
					</Link>
				</div>
			</div>
		);
	}
}

// Using id passed in through component props
// will retrieve a specific question from state
// and return a new question formated to accomadate
// what will be displayed in the QuestionCard component
function mapStateToProps ({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: formatQuestionCard(question, users[question.author]),
	}
}
 
export default connect(mapStateToProps)(QuestionCard);