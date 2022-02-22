import { useReducer } from "react";
import { answerReducer } from "../reducers/answer";

//本家wordleはローカルストレージに保存しているっぽい
export const useAnswerState = (theme_content_word_count: number): UseAnswerState => {

    const [answerState, dispatch] = useReducer(answerReducer, {
        answers: [...Array(5)].map(_ => [...Array(theme_content_word_count)].map(_ => "　")),
        row: 0,
        col: 0,
        theme_content_word_count: theme_content_word_count,
    });

    const inputAnswer = (letter: string) => dispatch({type: "INPUT_ANSWER", payload: {letter: letter}});

    const deleteAnswer = () => dispatch({type: "DELETE_ANSWER"});

    const submitAnswer = () => dispatch({type: "SUBMIT_ANSWER"});

    return {
        answerState,
        inputAnswer,
        deleteAnswer,
        submitAnswer,
    }

}