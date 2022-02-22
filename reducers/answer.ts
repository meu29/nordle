export const answerReducer = (state: AnswerState, action: AnswerAction): AnswerState => {

    let row = state.row;
    let col = state.col;

    /* 5回目の解答を提出するとrow = 5になる(5回目の解答はanswers[4]に格納) */
    if (row >= state.answers.length) {
        return state;
    } 

    let answers = [...state.answers];

    if (action.type === "INPUT_ANSWER" && col < state.answers[row].length) {
        answers[row][col] = action.payload.letter;
        col += 1;
    } else if (action.type === "DELETE_ANSWER" && col >= 0) {
        if (col > 0) {
            col -= 1;
        }
        answers[row][col] = "　";
    } else if (action.type === "SUBMIT_ANSWER") {
        row += 1;
        col = 0;
    }

    return {
        ...state,
        answers: answers,
        row: row,
        col: col
    }

}