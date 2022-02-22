import { useReducer } from "react";
import { answerReducer } from "../reducers/answer";
import { ANSWER_LIMIT } from "../utils";

//本家wordleはローカルストレージに保存しているっぽい
export const useAnswerState = (theme_content_word_count: number): UseAnswerState => {

    const [answerState, dispatch] = useReducer(answerReducer, {
        answers: [...Array(ANSWER_LIMIT)].map(_ => [...Array(theme_content_word_count)].map(_ => "　")),
        row: 0,
        col: 0,
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