import { useState } from "react";
import { ANSWER_LIMIT } from "../utils";

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
        colors: initRecord<Record<number, LetterColor>>(initRecord<LetterColor>({color: "#000000", bg: "#ffffff"}, theme_content.length), ANSWER_LIMIT),
        index: 0,
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

        let target_colors = {...prevAnswerState.colors[prevAnswerState.index]}

        if (prevAnswerState.answers[prevAnswerState.index] === theme_content) {
            target_colors = initRecord<LetterColor>({color: "#ffffff", bg: "#4caf50"}, theme_content.length);
        } else {
            for (const pos in target_colors) { 
                if (theme_content.includes(prevAnswerState.answers[prevAnswerState.index][pos])) {
                    target_colors[pos] = {color: "#ffffff", bg: "#C9B458"}
                } else {
                    target_colors[pos] =  {color: "#ffffff", bg: "#757575"}
                }
            }
        }

        return {
            ...prevAnswerState,
            colors: {
                ...prevAnswerState.colors,
                [prevAnswerState.index]: target_colors
            },
            index: prevAnswerState.index + 1
        }
    });

    return {
        answerState,
        deleteAnswer,
        submitAnswer,
        inputAnswer
    }

}