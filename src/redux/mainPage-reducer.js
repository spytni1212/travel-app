const SET_CURRENT_COUNTRY_DATA = 'SET_CURRENT_COUNTRY_DATA';

let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow', timeZone: 'Europe/Moscow' },
        { id: '2', country: 'Germany', capital: 'Berlin', timeZone: 'Europe/Berlin' },
        { id: '3', country: 'France', capital: 'Paris', timeZone: 'Europe/Paris' },
        { id: '4', country: 'Great Britain', capital: 'London', timeZone: 'Europe/London' },
        { id: '5', country: 'Belarus', capital: 'Minsk', timeZone: 'Europe/Minsk' },
        { id: '6', country: 'Italy', capital: 'Rome', timeZone: 'Europe/Rome' },
        { id: '7', country: 'China', capital: 'Beijing', timeZone: 'Etc/GMT+8' },
        { id: '8', country: 'USA', capital: 'Washington', timeZone: 'Etc/GMT-5' },
        { id: '9', country: 'Turkey', capital: 'Istanbul', timeZone: 'Europe/Istanbul' },
        { id: '10', country: 'Canada', capital: 'Ottawa', timeZone: 'Etc/GMT-5'}
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