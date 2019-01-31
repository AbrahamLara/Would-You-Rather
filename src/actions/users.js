export const RECEIVE_USERS = 'RECIEVE_USERS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function udpateAnswers (user) {
    return {
        type: UPDATE_ANSWERS,
        user,
    }
}

export function updateQuestions (user) {
    return {
        type: UPDATE_QUESTIONS,
        user,
    }
}