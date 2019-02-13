import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { addToQuestions } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function handleAddQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
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

function addAnswer ({ authedUser, qid, answer}) {
	return {
		type: ADD_ANSWER,
		authedUser,
		qid,
		answer,
	}
}

export function handleAddAnswer({ authedUser, quid, answer }) {

}