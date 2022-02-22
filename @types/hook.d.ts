type UseAnswerState = {
    answerState: AnswerState;
    inputAnswer: (letter: string) => void;
    deleteAnswer: () => void;
    submitAnswer: () => void;
}

type UsePlayLogs = {
    playlog: PlayLogState;
    updatePlayLog: (cleared: boolean) => void;
}