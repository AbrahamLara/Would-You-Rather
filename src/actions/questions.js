export const RECEVE_QUESTIONS = 'RECEVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

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

export function saveAnswer (question) {
	return {
		type: SAVE_ANSWER,
		question,
	}
}