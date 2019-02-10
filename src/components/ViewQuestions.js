import React, { Component } from 'react';
import '../style/ViewQuestions.css';
import { connect } from 'react-redux';
import Question from './Question';

class ViewQuestions extends Component {
	state = {
		view: 'unanswered',
	}

	changeViewTo = (view) => {
		if (view !== this.state.view){
			this.setState({
				view: view
			});
		}
	}

	render () {
		const {  answered, unanswered } = this.props;
		const selected = this.state.view === 'unanswered';
		const questions = selected ? unanswered  : answered;

		return (
			<div className="ViewQuestions">
				<table>
					<thead className='header-container'>
						<tr>
							<th
								className={selected ? 'selected' : ''}
								onClick={() => this.changeViewTo('unanswered')}
							>
								Unanswered Questions
							</th>
							<th
								className={'left-border'+(selected ? '' : ' selected')}
								onClick={() => this.changeViewTo('answered')}
							>
								Answered Questions
							</th>
						</tr>
					</thead>
					<tbody>
						{questions.map((question) => (<Question key={question.id} question={question}/>))}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, questions, users }) {
	const qs = Object.keys(questions).map((k,i) => questions[k]);
	return {
		answered: qs.filter((q) => q.id in users[authedUser].answers),
		unanswered: qs.filter((q) => !(q.id in users[authedUser].answers)),
	}
}

export default connect(mapStateToProps)(ViewQuestions);