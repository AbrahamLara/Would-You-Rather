export const RECEVE_QUESTIONS = 'RECEVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const UPDATE_OPTION_VOTES = 'UPDATE_OPTION_VOTES';

export function receiveQuestions (questions) {
	return {
		type: RECEVE_QUESTIONS,
		questions,
	}
}

export function saveQuestion (question) {
	return {
		type: SAVE_QUESTION,
		question,
	}
}

export function saveQuestionAnswer (question) {
	return {
		type: UPDATE_OPTION_VOTES,
		question,
	}
}