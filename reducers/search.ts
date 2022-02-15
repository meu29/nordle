export const searchReducer = (state: SearchState, action: SearchAction) => {

    switch (action.type) {
        case ("SELECT_TYPE"):
            return {...state, type: action.payload.type}
        case ("SELECT_PREF"):
            return {...state, pref: action.payload.pref}
    }

}