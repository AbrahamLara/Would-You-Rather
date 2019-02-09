import React, { Component } from 'react';
import '../style/ViewQuestions.css';
import logo from '../logo.svg';

class ViewQuestions extends Component {
	render () {
		return (
			<div className="ViewQuestions">
				<table>
					<thead className='header-container'>
						<tr>
							<th className='selected'>
								Unanswered Questions
							</th>
							<th className='left-border'>
								Answered Questions
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='QuestionCard' colSpan='2'>
								<div className='header'>
									User asks:
								</div>
								<div className='card-info'>
									<div className='profile-image-container'>
										<img className='profile-image' src={logo} />
									</div>
									<strong>Would you rather</strong>
									<span>...a...</span>
									<button className='btn btn-view-poll'>View Poll</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default ViewQuestions;