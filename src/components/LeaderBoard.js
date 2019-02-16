import React, { Component } from 'react';
import '../style/LeaderBoard.css';
import LeaderBoardCard from './LeaderBoardCard';
import { connect } from 'react-redux';
import { getUserScore } from '../utils/helpers';

class LeaderBoard extends Component {
	render () {
		const { ids } = this.props;
		return (
			<div className='LeaderBoard'>
				{ids.map((id, i) => <LeaderBoardCard key={id} id={id} rank={i+1}/>)}
			</div>
		);
	}
}

// Gets users from state to get keys from object
// so that it may return a sorted array of ids
// for ranking
function mapStateToProps ({ users }) {
	return {
		ids: Object.keys(users)
			.sort((a, b) => getUserScore(users[b]) - getUserScore(users[a])),
	}
}

export default connect(mapStateToProps)(LeaderBoard);