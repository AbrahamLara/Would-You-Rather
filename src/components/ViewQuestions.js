import React, { Component } from 'react';
import '../style/ViewQuestions.css';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class ViewQuestions extends Component {
	state = {
		view: 'unanswered',
	}

	// Updates component state to display
	// selected view
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
		const ids = selected ? unanswered  : answered;

		return (
			<div className="ViewQuestions">
				<table className="vq-table">
					<thead className='vq-header-container'>
						<tr className='vq-tr'>
							<th
								className={'vq-th'+(selected ? ' vq-selected' : '' )}
								onClick={() => this.changeViewTo('unanswered')}
							>
								Unanswered Questions
							</th>
							<th
								className={'vq-th vq-left-border'+(selected ? '' : ' vq-selected')}
								onClick={() => this.changeViewTo('answered')}
							>
								Answered Questions
							</th>
						</tr>
					</thead>
					<tbody className='vq-tbody'>
						{ids.map((id) => (
							<tr className='vq-tr' key={id}>
								<td className='vq-td' colSpan='2'>
									<QuestionCard key={id} id={id}/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

// Using authedUser retrieves their answered and unaswered questions
// from questions and users state to display authenticated user's
// answered and unaswered questions
function mapStateToProps ({ authedUser, questions, users }) {
	const ids = Object.keys(questions)
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
	
	return {
		answered: ids.filter((id) => id in users[authedUser].answers),
		unanswered: ids.filter((id) => !(id in users[authedUser].answers)),
	}
}

export default connect(mapStateToProps)(ViewQuestions);