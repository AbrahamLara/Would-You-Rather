// Action event to update user authentication
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// Action to be used in user reducer for updating state with
// new authenticated user
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}