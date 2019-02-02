import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ADD_ANSWER:
            const { question } = state;

            return {
                ...state,
                [question.id]: {
                    ...question,
                    [action.answer]: {
                        ...question[answer],
                        votes: question[answer].votes.concat([action.authedUser]),
                    }
                }
            }
    }
}