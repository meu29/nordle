type IndexPageProps = {
    theme: WordleTheme;
}

type ColoredLetterBoxGroupProps = {
    row: number;
    answer: Answer;
    theme_content: string;
    checked: boolean;
}

type KeyboardProps = {
    handleLetterButtonClick: (letter: string) => void;
}