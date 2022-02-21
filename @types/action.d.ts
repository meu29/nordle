type AnswerAction = {
    type: "INIT_ANSWERS",
    payload: {
        theme: WordleTheme;
    }
} | {
    type: "INPUT_ANSWER",
    payload: {
        letter: string;
    }
} | {
    type: "DELETE_ANSWER",
} | {
    type: "SUBMIT_ANSWER" 
}