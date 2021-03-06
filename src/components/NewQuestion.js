import React, { Component } from 'react';
import '../style/NewQuestion.css';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false,
	}

	// This function is for updating component state
	// with input values as the user types
	updateField = (e, option) => {
		this.setState({
			[option]: e.target.value,
		});
	}

	// Upon clicking 'submit' the handleAddQuestion
	// function is dispatched in order update state
	// with newly created question
	handleSubmit = (e) => {
		e.preventDefault();
		
		const { optionOne, optionTwo } = this.state;

		if (optionOne !== '' && optionTwo !== '') {
			this.props.dispatch(handleAddQuestion(optionOne, optionTwo));

			this.setState({
				optionOne: '',
				optionTwo: '',
				toHome: true,
			});
		}
	}

	render () {
		const { optionOne, optionTwo, toHome } = this.state;

		if (toHome) {
			return <Redirect to='/' />
		}

		return (
			<div className='NewQuestion'>
				<div className='nq-form-header'><strong>Would You Rather:</strong></div>
				<form className='nq-form'>
					<input
						className='nq-form-input nq-form-item'
						placeholder='Type Option One here'
						value={optionOne}
						onChange={(e) => this.updateField(e, 'optionOne')}
					/>
					<div className='nq-center-text'>or</div>
					<input
						className='nq-form-input nq-form-item'
						placeholder='Type Option Two here'
						value={optionTwo}
						onChange={(e) => this.updateField(e, 'optionTwo')}
					/>
					<button
						className='btn nq-btn-submit nq-form-item'
						onClick={this.handleSubmit}
					>
						Submit	
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewQuestion);