let initialState = {
    countriesCardsData : [
        { id: '1', test:'aa' },
        { id: '2', test:'ff' },
        { id: '3', test:'adda' },
        { id: '4', test:'acva' },
        { id: '5', test:'atta' },
        { id: '6', test:'dd' },
        { id: '7', test:'dgm' },
        { id: '8', test:'bcv' },
        { id: '9', test:'aa' },
        { id: '10', test:'aa' }
    ]
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default mainPageReducer;