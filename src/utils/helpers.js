// Function that return neceessary values
// from given question and user objects
// to display on QuestionCard component
export function formatQuestionCard ({ id, optionOne, }, { name, avatarURL, }) {
    return {
        id,
        author: name,
        optionOne,
        avatarURL,
    };
}

// Function that return neceessary values
// from given user object to display on
// LeaderBoardCard component
export function formatLeaderBoardCard ({ id, name, answers, questions, avatarURL, }) {
    return {
        id,
        name,
        avatarURL,
        answered: objlen(answers),
        created: questions.length,
        score: objlen(answers) + questions.length,
    };
}

// Function that return neceessary values
// from given question and users object to display on
// Question component
export function formatQuestion ({ id,  author, optionOne, optionTwo, }, users) {
    const { name, avatarURL, } = users[author];

    return {
        id,
        name,
        avatarURL,
        optionOneText: optionOne.text,
        optionTwoText: optionTwo.text,
    };
}

// Function that return neceessary values
// from given user, question, and users object to display on
// AnsweredQuestion component
export function formatAnsweredQuestion (user, question, users) {
    return {
        ...formatQuestion(question, users),
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
        answer: user.answers[question.id],
    };
}

function objlen (obj) {
    return Object.keys(obj).length;
}