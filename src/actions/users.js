export const RECEIVE_USERS = 'RECIEVE_USERS';

function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}