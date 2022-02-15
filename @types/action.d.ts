type SearchAction = {
    type: "SELECT_TYPE",
    payload: {
        type: string;
    }
} | {
    type: "SELECT_PREF",
    payload: {
        pref: string;
    }
}