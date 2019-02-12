import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/LeaderBoard.css'

class LeaderBoard extends Component {
	render () {
		return (
			<div className='LeaderBoard'>
				<div className='LeaderBoardCard'>
					<img className='lbc-profile-picture' width='100px' src={logo} />
					<strong className='lbc-user-name'>Full Name</strong>
					<div className='lbc-label-top'>Answered Questions: <span className='lbc-amount'>5</span></div>
					<div className='lbc-label-bottom'>Unanswered Questions: <span className='lbc-amount'>3</span></div>
					<div className='lbc-score-container'>
						<div className='lbc-score-header'>Score</div>
						<div className='lbc-total-score'>
							8
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LeaderBoard;