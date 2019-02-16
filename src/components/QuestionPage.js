import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion, formatAnsweredQuestion } from '../utils/helpers';
import '../style/QuestionPage.css';
import { handleAddAnswer } from '../actions/questions';
import Question from './Questions';
import AnsweredQuestion from './AnsweredQuestion';
import Question404 from './Question404';

class QuestionPage extends Component {
	// Upon clicking 'submit' the handleAddAnswer
	// function is dispatched with the answer the user
	// selected and the question id
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

// Gets auhthenticated user, questions, and users from state
// and id of question from the url params to determine whether
// or not there is a question that exists with the given id
// to know whether to render a custom 404 page or the actual
// question
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