type SettingState = {
    pref: string;
}

type AnswerState = {
    answers: Answer[];
    row: number;
    col: number;
    theme: WordleTheme;
}