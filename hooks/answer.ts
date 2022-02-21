import { useReducer } from "react";
import { answerReducer } from "../reducers/answer";

export const useAnswerState = (): UseAnswerState => {

    const [answerState, dispatch] = useReducer(answerReducer, {answers: [], row: 0, col: 0, theme: {id: "", content: "", content_furigana: "", tag: ""}});

    const initAnswers = (theme: WordleTheme) => dispatch({type: "INIT_ANSWERS", payload: {theme: theme}});

    const inputAnswer = (letter: string) => dispatch({type: "INPUT_ANSWER", payload: {letter: letter}});

    const deleteAnswer = () => dispatch({type: "DELETE_ANSWER"});

    const submitAnswer = () => dispatch({type: "SUBMIT_ANSWER"});

    return {
        answerState,
        initAnswers,
        inputAnswer,
        deleteAnswer,
        submitAnswer,
    }

}