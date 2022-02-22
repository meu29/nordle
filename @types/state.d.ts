type AnswerState = {
    answers: Answer[];
    row: number;
    col: number;
    theme_content_word_count: number;
}

type PlayLogState = {
    play_num: number;
    clear_num: number;
    current_streak: number;
    max_streak: number;
}