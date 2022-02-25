type UseAnswerState = {
    answerState: AnswerState;
    inputAnswer: (letter: string) => void;
    deleteAnswer: () => void;
    submitAnswer: () => void;
}

type UsePastThemes = {
    past_themes: PastWordleThemeState;
    addPastTheme: (theme: WordleTheme) => void;
    deletePastTheme: (id: string) => void;
}