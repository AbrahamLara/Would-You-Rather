import React, { Component } from 'react';
import '../style/ViewQuestions.css';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

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
		const ids = selected ? unanswered  : answered;

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
						{ids.map((id) => (
							<tr key={id}>
								<td colSpan='2'>
									<QuestionCard id={id}/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, questions, users }) {
	const ids = Object.keys(questions)
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
	
	return {
		answered: ids.filter((id) => id in users[authedUser].answers),
		unanswered: ids.filter((id) => !(id in users[authedUser].answers)),
	}
}

export default connect(mapStateToProps)(ViewQuestions);