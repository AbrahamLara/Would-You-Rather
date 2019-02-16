import { RECEIVE_USERS, ADD_TO_QUESTIONS, ADD_TO_ANSWERS, } from "../actions/users";

// users reducer to determine which action event
// will update state
export default function users (state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_TO_QUESTIONS:
			const { author, id } = action.question;

			return {
				...state,
				[author]: {
					...state[author],
					questions: state[author].questions.concat([id]),
				},
			};
		case ADD_TO_ANSWERS:
			const { authedUser, qid, answer } = action.answer;
			
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer,
					},
				}
			}
		default:
			return state;
	}
}