let initialState = {
    countriesCardsData : [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10'}
    ]
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default mainPageReducer;