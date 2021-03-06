import React from 'react';
import '../style/LeaderBoardCard.css';
import { connect } from 'react-redux';
import { formatLeaderBoardCard } from '../utils/helpers';

function LeaderBoardCard (props) {
	const { name, answered, created, avatarURL, score, } = props.user;
	
	return (
		<div className='LeaderBoardCard'>
			<span className='lbc-rank'>#{ props.rank }</span>
			<img className='lbc-profile-picture' width='100px' alt='profile-pic' src={ avatarURL } />
			<strong className='lbc-user-name'>{ name }</strong>
			<div className='lbc-label-top'>
				Answered Questions: <span className='lbc-amount'>{ answered }</span>
			</div>
			<div className='lbc-label-bottom'>
				Created Questions: <span className='lbc-amount'>{ created }</span>
			</div>
			<div className='lbc-score-container'>
				<div className='lbc-score-header'>Score</div>
				<div className='lbc-total-score'>
					{ score }
				</div>
			</div>
		</div>
	);
}

function mapStateToProps ({ users }, { id }) {
	return {
		user: formatLeaderBoardCard(users[id]),
	}
}

export default connect(mapStateToProps)(LeaderBoardCard);