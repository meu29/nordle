type UseAnswerState = {
    answerState: AnswerState;
    initAnswers: (theme: WordleTheme) => void;
    inputAnswer: (letter: string) => void;
    deleteAnswer: () => void;
    submitAnswer: () => void;
}

type UseSettings = {
    settings: SettingState;
    updatePref: (pref: string) => void;
}