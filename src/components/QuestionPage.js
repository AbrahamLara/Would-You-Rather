import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatUnansweredQuestion } from '../utils/helpers';
import '../style/QuestionPage.css';

class QuestionPage extends Component {
	state = {
		o1Selected: false,
		o2Selected: false,
		selection: -1,
	}

	toggleOption1 = (e) => {
		let selection = e.target.value;

		this.setState((currState) => ({
			selection,
			o1Selected: !currState.o1Selected,
			o2Selected: false,
		}));
	}

	toggleOption2 = (e) => {
		let selection = e.target.value;

		this.setState((currState) => ({
			selection,
			o1Selected: false,
			o2Selected: !currState.o2Selected,
		}));
	}

	render () {
		const { o1Selected, o2Selected } = this.state;
		const { authedUser, question } = this.props;
		const { name, avatarURL, optionOneText, optionTwoText } = question;

		return (
			<div className='QuestionPage'>
					<div className='Question'>
						<div className='question-header'>
							<strong className='question-author-name'>{ name } asks:</strong>
						</div>
						<div className='question-bottom-container'>
							<img className='question-author-avatar' src={avatarURL} />
							<strong className='question-subheader'>Would you rather:</strong>
							<div className='question-option-one'>
								<input
									className='question-option'
									type='radio'
									value={0}
									checked={o1Selected}
									onChange={this.toggleOption1}
								/> { optionOneText }
							</div>
							<span className='question-or-separator'>or</span>
							<div className='question-option-two'>
								<input
									className='question-option'
									type='radio'
									value={1}
									checked={o2Selected}
									onChange={this.toggleOption2}
								/> { optionTwoText }
							</div>
							<button className='btn question-submit-answer-btn'>Submit</button>
						</div>
					</div>
			</div>
		);
	}
}

function mapStateToProps ({ authedUser, questions, users }, { match, }) {
	const question = questions[match.params.id];

	return {
		question: formatUnansweredQuestion(question, users[question.author]),
		authedUser,
	}
}

export default connect(mapStateToProps)(QuestionPage);