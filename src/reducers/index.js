import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./user";
import { questions } from "./question";
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
});