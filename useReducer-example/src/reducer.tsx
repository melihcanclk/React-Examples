interface State {
    data: string;
    loading: boolean;
    error: string;
}

interface Action {
    type: string;
    payload?: any;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, data: "", loading: true, error: "" };
        case "FETCH_SUCCESS":
            return { ...state, data: action.payload, loading: false, error: "" };
        case "FETCH_ERROR":
            return { ...state, data: "", loading: false, error: action.payload };
        default:
            return state;
    }
}

export default reducer