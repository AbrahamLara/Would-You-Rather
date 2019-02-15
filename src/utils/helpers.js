export function formatQuestionCard ({ id, optionOne, }, { name, avatarURL, }) {
    return {
        id,
        author: name,
        optionOne,
        avatarURL,
    };
}

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

export function formatAnsweredQuestion (user, question, users) {
    return {
        ...formatQuestion(question, users),
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
        answer: user.answers[question.id],
    };
}

export function objlen (obj) {
    return Object.keys(obj).length;
}