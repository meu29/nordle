type UseAnswerState = {
    answerState: AnswerState;
    inputAnswer: (letter: string) => void;
    deleteAnswer: () => void;
    submitAnswer: () => void;
}