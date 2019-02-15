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

	updateFieldOne = (e) => {
		this.setState({
			optionOne: e.target.value,
		});
	}

	updateFieldTwo = (e) => {
		this.setState({
			optionTwo: e.target.value,
		});
	}

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
						onChange={this.updateFieldOne}
					/>
					<div className='nq-center-text'>or</div>
					<input
						className='nq-form-input nq-form-item'
						placeholder='Type Option Two here'
						value={optionTwo}
						onChange={this.updateFieldTwo}
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