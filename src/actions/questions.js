import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { addToQuestions, addToAnswers } from "./users";

// Action events to update state for retrieving all questions
// from API, adding a new question to state,
// or adding a user's answer to a question's votes
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

// Action to be used in question reducer for updating
// state with questions from src/utils/_DATA.js
export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

// Action to be used in question reducer for updating state
// with newly created question
function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

// This function goes through the redux-thunk
// middleware so we may get the currently authenticated
// user and add make them the auther of the newly created
// question and then add that question's id to the authenticated
// user's array of questions created. It also displays a
// loading bar that hides after the state and API have been
// updated.
export function handleAddQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser, } = getState();
		dispatch(showLoading());
		
		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		}).then((question) => {
			dispatch(addQuestion(question))
			dispatch(addToQuestions(question))
		})
		.then(() => dispatch(hideLoading()));
	}
}

// Action to be used in question reducer for adding a user to
// the votes of an answer on a question
function addAnswer ({ authedUser, qid, answer}) {
	return {
		type: ADD_ANSWER,
		authedUser,
		qid,
		answer,
	}
}

// This fucntion goes through the redux-thunk
// middleware so we may ge the currently authenticated
// user and add their answer to a question in their
// answers object. It also displays a
// loading bar that hides after the state and API have been
// updated.
export function handleAddAnswer({ id, answer }) {
	return (dispatch, getState) => {
		const { authedUser, } = getState();
		const questionAnswer = { qid: id, authedUser, answer };

		dispatch(showLoading());

		return saveQuestionAnswer(questionAnswer).then(() => {
			dispatch(addAnswer(questionAnswer));
			dispatch(addToAnswers(questionAnswer));
		}).then(() => dispatch(hideLoading()));
	}
}