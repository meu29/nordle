type AnswerState = {
    answers: Record<number, string>
    colors: Record<number, Record<number, LetterColor>>
    index: number;
    status: "SUCCESS" | "FAILURE" | "PLAYING";
}

type PastWordleThemeState = Record<string, WordleTheme>;