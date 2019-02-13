export function formatQuestionCard ({ id, optionOne, }, { name, avatarURL, }) {
    return {
        id,
        author: name,
        optionOne,
        avatarURL,
    }
}

export function formatLeaderBoardCard ({ id, name, answers, questions, avatarURL, }) {
    return {
        id,
        name,
        avatarURL,
        answered: objlen(answers),
        created: questions.length,
        score: objlen(answers) + questions.length,
    }
}

export function formatUnansweredQuestion ({ optionOne, optionTwo }, { name, avatarURL}) {
    return {
        name,
        avatarURL,
        optionOneText: optionOne.text,
        optionTwoText: optionTwo.text,
    }
}

export function objlen (obj) {
    return Object.keys(obj).length;
}