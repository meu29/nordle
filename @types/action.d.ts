type AnswerAction = {
    type: "INPUT_ANSWER",
    payload: {
        letter: string;
    }
} | {
    type: "DELETE_ANSWER",
} | {
    type: "SUBMIT_ANSWER" 
}