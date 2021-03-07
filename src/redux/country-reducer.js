const SET_COUNTRY_DATA = 'SET_COUNTRY_DATA';

let initialState = {
    countryData: {}
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY_DATA:
            return { ...state, countryData: action.countryData }
        default:
            return state
    }
}

export const setCountryDataAC = (countryData) => ({ type:SET_COUNTRY_DATA, countryData })

export default countryReducer;