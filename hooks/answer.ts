import { useState } from "react";
import { ANSWER_LIMIT, LETTER_COLORS } from "../utils";

const initRecord = <T>(init_value: T, num: number): Record<number, T> => {

    let record = {}

    for (let i = 0; i <= num - 1; i++) {
        record[i] = init_value;
    }

    return record;

}

export const useAnswerState = (theme_content: string): UseAnswerState => {

    const [answerState, setAnswerState] = useState<AnswerState>({
        answers: initRecord<string>("", ANSWER_LIMIT),
        colors: initRecord<Record<number, LetterColor>>(initRecord<LetterColor>(LETTER_COLORS.UNRATED, theme_content.length), ANSWER_LIMIT),
        index: 0,
        status: "PLAYING"
    });

    const inputAnswer = (letter: string) => setAnswerState((prevAnswerState) => {
        return {
            ...prevAnswerState,
            answers: {
                ...prevAnswerState.answers,
                [prevAnswerState.index]: prevAnswerState.answers[prevAnswerState.index] + letter
            }
        }
    });

    const deleteAnswer = () => setAnswerState((prevAnswerState) => {
        return {
            ...prevAnswerState,
            answers: {
                ...prevAnswerState.answers,
                [prevAnswerState.index]: prevAnswerState.answers[prevAnswerState.index].slice(0, -1)
            }
        }
    });

    const submitAnswer = () => setAnswerState((prevAnswerState) => {

        /* 必ずスプレッド 代入だと0~5全てに反映されてしまう */
        let target_colors = {...prevAnswerState.colors[prevAnswerState.index]};
        let status = prevAnswerState.status;

        if (prevAnswerState.answers[prevAnswerState.index] === theme_content) {
            target_colors = initRecord<LetterColor>(LETTER_COLORS.EXACT_MATCH, theme_content.length);
            status = "SUCCESS";
        } else {
            if (prevAnswerState.index + 1 === ANSWER_LIMIT) {
                status = "FAILURE";
            }
            for (const pos in target_colors) { 
                if (prevAnswerState.answers[prevAnswerState.index][pos] === theme_content[pos]) {
                    target_colors[pos] = LETTER_COLORS.EXACT_MATCH
                } else if (theme_content.includes(prevAnswerState.answers[prevAnswerState.index][pos])) {
                    target_colors[pos] = LETTER_COLORS.PARTIAL_MATCH
                } else {
                    target_colors[pos] = LETTER_COLORS.NO_MATCH
                }
            }
        }

        return {
            ...prevAnswerState,
            colors: {
                ...prevAnswerState.colors,
                [prevAnswerState.index]: target_colors
            },
            index: prevAnswerState.index + 1,
            status: status
        }
        
    });

    return {
        answerState,
        deleteAnswer,
        submitAnswer,
        inputAnswer
    }

}