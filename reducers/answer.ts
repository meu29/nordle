export const answerReducer = (state: AnswerState, action: AnswerAction): AnswerState => {

    if (action.type === "INIT_ANSWERS") {
        return {
            answers: [...Array(5)].map(_ => [...Array(action.payload.theme.content_furigana.length)].map(_ => "　")),
            row: 0,
            col: 0,
            theme: action.payload.theme
        }
    } else if (action.type === "INPUT_ANSWER" && state.col < state.theme.content_furigana.length) {
        return {
            ...state,
            answers: state.answers.map((answer, row) => {
                if (row === state.row) {
                    answer[state.col] = action.payload.letter;
                }
                return answer;
            }),
            col: state.col + 1
        }
    } else if (action.type === "DELETE_ANSWER" && state.answers[state.row].length <= 0) {
        return {
            ...state, 
            answers: state.answers.map((answer, index) => {
                if (index === state.row) {
                    answer[state.col] = "　"
                }
                return answer;
            }),
            col: state.col - 1
        }
    } else if (action.type === "SUBMIT_ANSWER") {
        return {
            ...state,
            row: state.row + 1,
            col: 0
        }
    } else {
        return state;
    }

}