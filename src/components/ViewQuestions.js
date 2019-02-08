import React, { Component } from 'react';
import '../style/ViewQuestions.css';

class ViewQuestions extends Component {
	render () {
		return (
			<div className="ViewQuestions">
				<table>
					<thead className='header-container'>
						<tr>
							<th scope='col'>
								Unanswered Questions
							</th>
							<th scope='col'>
								Answered Questions
							</th>
						</tr>
					</thead>
				</table>
			</div>
		)
	}
}

export default ViewQuestions;