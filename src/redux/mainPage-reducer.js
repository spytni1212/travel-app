const SET_CURRENT_COUNTRY_DATA = 'SET_CURRENT_COUNTRY_DATA';
const SET_COPY_CONTRIES_DATA = 'SET_COPY_CONTRIES_DATA';


let initialState = {
    copyCountryData: [],
    currentCountry: {}
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COPY_CONTRIES_DATA:
            return {...state, copyCountryData: action.countriesData}
        case SET_CURRENT_COUNTRY_DATA:
            return { ...state, currentCountry: action.countryData }
        default:
            return state
    }
}

export const setCurrentCountryDataAC = (countryData) => ({ type: SET_CURRENT_COUNTRY_DATA, countryData });
export const setCopyContriesDataAC = (countriesData) => ({ type: SET_COPY_CONTRIES_DATA, countriesData })

export default mainPageReducer;