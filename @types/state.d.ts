type LetterColorState = LetterColor[][];

type AnswerState = {
    answers: Record<number, string>
    colors: Record<number, Record<number, LetterColor>>
    index: number;
    //corrected
}
