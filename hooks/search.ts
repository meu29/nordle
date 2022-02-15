import { useReducer } from "react";
import { searchReducer } from "../reducers/search"

export const useSearchState = (): UseSearchState => {

    const [searchState, dispatch] = useReducer(searchReducer, {type: "", pref: ""});

    const selectType = (type: string) => dispatch({
        type: "SELECT_TYPE", 
        payload: {
            type: type
        }
    });

    const selectPref = (pref: string) => dispatch({
        type: "SELECT_PREF",
        payload: {
            pref: pref
        }
    });

    return { searchState, selectType, selectPref }

}