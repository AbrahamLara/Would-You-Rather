import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData (userid = 'none') {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users));
				dispatch(receiveQuestions(questions));
				dispatch(setAuthedUser(userid));
				dispatch(hideLoading());
			});
	}
}
