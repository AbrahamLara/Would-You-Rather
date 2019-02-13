import React, { Component } from 'react';
import '../style/LeaderBoard.css';
import LeaderBoardCard from './LeaderBoardCard';
import { connect } from 'react-redux';
import { formatLeaderBoardCard } from '../utils/helpers';

class LeaderBoard extends Component {
	render () {
		const { users } = this.props;
		return (
			<div className='LeaderBoard'>
				{users.map((user, i) => <LeaderBoardCard key={user.id} user={user} rank={i+1}/>)}
			</div>
		);
	}
}

function mapStateToProps ({ users }) {
	return {
		users: Object.keys(users)
		.map((id) => formatLeaderBoardCard(users[id]))
		.sort((a, b) => b.score - a.score),
	}
}

export default connect(mapStateToProps)(LeaderBoard);