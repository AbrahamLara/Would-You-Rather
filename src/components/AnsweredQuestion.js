import React, { Component } from 'react';
import '../style/AnsweredQuestion.css'
import ProgressBar from './ProgressBar';

class AnsweredQuestion extends Component {
	render() {
		const {
			name,
			avatarURL,
			optionOneText,
			optionTwoText,
			optionOneVotes,
			optionTwoVotes,
			answer,
		} = this.props.question;

		return (
			<div className='AnsweredQuestion'>
			<div className='answered-question-header'>
				<strong className='answered-question-author-name'>Asked by { name }:</strong>
			</div>
			<div className='answered-question-bottom-container'>
				<img className='answered-question-author-avatar' alt='profile-pic' src={avatarURL} />
				<div className='answered-question-left-sub-container'>
					<strong className='answered-question-subheader'>Would you rather:</strong>
					<div className={'answered-question-option btm-mg'}>
						{answer === 'optionOne' && <div className='answered-question-option-selected'>
							Your vote
						</div>}
						<span className='answered-question-option-text'>{ optionOneText }</span>
						<label className='answered-question-option-votes'>
							votes: { optionOneVotes } / { optionOneVotes + optionTwoVotes }
						</label>
						<ProgressBar value={optionOneVotes} max={optionOneVotes + optionTwoVotes} />
					</div>
					<div className='answered-question-option'>
						{answer === 'optionTwo' && <div className='answered-question-option-selected'>
							Your vote
						</div>}
						<span className='answered-question-option-text'>{ optionTwoText }</span>
						<label className='answered-question-option-votes'>
							votes: { optionTwoVotes } / { optionOneVotes + optionTwoVotes }
						</label>
						<ProgressBar value={optionTwoVotes} max={optionOneVotes + optionTwoVotes} />
					</div>
				</div>
			</div>
		</div>
		);
	}
}
 
export default AnsweredQuestion;