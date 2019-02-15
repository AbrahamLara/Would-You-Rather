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
			<div className='aq-header'>
				<strong className='aq-author-name'>Asked by { name }:</strong>
			</div>
			<div className='aq-bottom-container'>
				<img className='aq-author-avatar' alt='profile-pic' src={avatarURL} />
				<div className='aq-left-sub-container'>
					<strong className='aq-subheader'>Would you rather:</strong>
					<div className='aq-option'>
						{answer === 'optionOne' && <div className='aq-option-selected'>
							&#10004;
						</div>}
						<span className='aq-option-text'>{ optionOneText }</span>
						<label className='aq-option-votes'>
							votes: { optionOneVotes } / { optionOneVotes + optionTwoVotes }
						</label>
						<ProgressBar value={optionOneVotes} max={optionOneVotes + optionTwoVotes} />
					</div>
					<div className='aq-option'>
						{answer === 'optionTwo' && <div className='aq-option-selected'>
						&#10004;
						</div>}
						<span className='aq-option-text'>{ optionTwoText }</span>
						<label className='aq-option-votes'>
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