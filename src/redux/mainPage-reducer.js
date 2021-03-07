const SET_CURRENT_COUNTRY_DATA = 'SET_CURRENT_COUNTRY_DATA';

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
    ],
    currentCountry: {}
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_COUNTRY_DATA:
            return { ...state, currentCountry: action.countryData }
        default:
            return state
    }
}

export const setCurrentCountryDataAC = (countryData) => ({ type: SET_CURRENT_COUNTRY_DATA, countryData })

export default mainPageReducer;