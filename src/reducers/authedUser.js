import { SET_AUTHED_USER } from '../actions/authedUser';

// authedUser reducer to determine which action event
// will update state
export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        default:
            return state;
    }
}