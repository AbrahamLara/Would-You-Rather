import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion, formatAnsweredQuestion } from '../utils/helpers';
import '../style/QuestionPage.css';
import { handleAddAnswer } from '../actions/questions';
import Question from './Questions';
import AnsweredQuestion from './AnsweredQuestion';
import Question404 from './Question404';

class QuestionPage extends Component {
	handleSubmit = (e, id) => {
		const answer = e.target.value;

		if (answer) {
			this.props.dispatch(handleAddAnswer({ answer, id, }));
		}
	}

	render () {
		const { answered, question, id } = this.props;

		if (!question) {
			return <Question404 id={id}/>
		}

		return (
			<div className='QuestionPage'>
				{answered ?
					<AnsweredQuestion question={question} />
					: <Question
							question={question}
							onSubmit={(e) => this.handleSubmit(e, question.id)}
						/>
				}
			</div>
		);
	}
}

function mapStateToProps ({ authedUser, questions, users, }, { match, }) {
	const id = match.params.id

	if (!(id in questions)) {
		return {
			id,
		};
	}

	const answered = id in users[authedUser].answers;

	return {
		answered,
		question: answered ? formatAnsweredQuestion(users[authedUser], questions[id], users)
		: formatQuestion(questions[id], users),
	}
}

export default connect(mapStateToProps)(QuestionPage);