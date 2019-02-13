import { RECEIVE_USERS, ADD_TO_QUESTIONS,  } from "../actions/users";

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
        default:
            return state;
    }
}