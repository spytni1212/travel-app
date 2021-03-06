let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow' },
        { id: '2', country: 'Germany', capital: 'Berlin' },
        { id: '3', country: 'France', capital: 'Paris' },
        { id: '4', country: 'Great Britain', capital: 'London' },
        { id: '5', country: 'Belarus', capital: 'Minsk' },
        { id: '6', country: 'Italy', capital: 'Rome' },
        { id: '7', country: 'China', capital: 'Beijing' },
        { id: '8', country: 'USA', capital: 'Washington' },
        { id: '9', country: 'Turkey', capital: 'Istanbul' },
        { id: '10', country: 'Canada', capital: 'Ottawa'}
    ]
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default mainPageReducer;