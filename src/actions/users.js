// Action events to update state for retrieving all users
// from API, adding newly created question to user's
// arrau of questions created, or adding a user's answer
// to a question in their answers object
export const RECEIVE_USERS = 'RECIEVE_USERS';
export const ADD_TO_QUESTIONS = 'ADD_TO_QUESTIONS';
export const ADD_TO_ANSWERS = 'ADD_TO_ANSWERS';

// Action to be used in user reducer for updating state
// with users from src/utils/_DATA.js
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

// Action to be used in user reducer for updating state
// with newly created question to authenticated
// user's array of questions
export function addToQuestions (question) {
    return {
        type: ADD_TO_QUESTIONS,
        question,
    }
}

// Action to be used in user reducer for updating a user's
// state with their new answer to a question in their answers
// object
export function addToAnswers(answer) {
    return {
        type: ADD_TO_ANSWERS,
        answer,
    }
}