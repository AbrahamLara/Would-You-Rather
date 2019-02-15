import React, { Component } from 'react';
import '../style/Question.css';

class Question extends Component {
	state = {
		o1Selected: false,
		o2Selected: false,
		selection: '',
	}

	toggleOption1 = (e) => {
		let selection = e.target.value;

		this.setState((currState) => ({
			selection,
			o1Selected: !currState.o1Selected,
			o2Selected: false,
		}));
	}

	toggleOption2 = (e) => {
		let selection = e.target.value;

		this.setState((currState) => ({
			selection,
			o1Selected: false,
			o2Selected: !currState.o2Selected,
		}));
	}

	render() {
		const { o1Selected, o2Selected, selection } = this.state;
		const { question, onSubmit } = this.props;
		const { name, avatarURL, optionOneText, optionTwoText } = question;

		return (
			<div className='Question'>
				<div className='question-header'>
					<strong className='question-author-name'>{ name } asks:</strong>
				</div>
				<div className='question-bottom-container'>
					<img className='question-author-avatar' src={avatarURL} />
					<strong className='question-subheader'>Would you rather:</strong>
					<div className='question-option-one'>
						<input
							className='question-option'
							type='radio'
							value={'optionOne'}
							checked={o1Selected}
							onChange={this.toggleOption1}
						/> { optionOneText }
					</div>
					<span className='question-or-separator'>or</span>
					<div className='question-option-two'>
						<input
							className='question-option'
							type='radio'
							value={'optionTwo'}
							checked={o2Selected}
							onChange={this.toggleOption2}
						/> { optionTwoText }
					</div>
					<button
						className='btn question-submit-answer-btn'
						onClick={onSubmit}
						value={selection}
					>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
 
export default Question;