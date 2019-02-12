export function formatQuestionCard({ id, optionOne }, { name, avatarURL }) {
    return {
        id,
        author: name,
        optionOne,
        avatarURL,
    }
}