export const RECEIVE_USERS = 'RECIEVE_USERS';
export const ADD_TO_QUESTIONS = 'ADD_TO_QUESTIONS';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addToQuestions (question) {
    return {
        type: ADD_TO_QUESTIONS,
        question,
    }
}