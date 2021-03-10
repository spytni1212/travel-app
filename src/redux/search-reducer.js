const SET_VALUE = 'SET_VALUE';

let initialState = {
    value: "",
}

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return { ...state, value: action.value }
        default:
            return state
    }
}


export const setValue = (value) => ({ type: SET_VALUE, value})

export default searchReducer;