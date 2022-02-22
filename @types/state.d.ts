type AnswerState = {
    answers: Answer[];
    row: number;
    col: number;
}

type PlayLogState = {
    play_num: number;
    clear_num: number;
    current_streak: number;
    max_streak: number;
}