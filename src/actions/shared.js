import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

// This function is passed through redux-thun in order
// to display a loading bar while the users, questions,
// and authedUser data  is retrieved then hiding the loading
// bar.
export function handleInitialData (userid = '') {
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
