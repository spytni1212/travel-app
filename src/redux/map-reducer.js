const SET_COUNTRY_COORDINATES = 'SET_COUNTRY_COORDINATES';
const SET_LATLNG = 'SET_LATLNG';

let initialState = {
    countryCoordinates: [],
    latLng: [],
}

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_LATLNG:
            return { ...state, latLng: action.latLng }
        case SET_COUNTRY_COORDINATES:
            return { ...state, countryCoordinates: action.countryCoordinates }
        default:
            return state
    }
}


export const setCountryCoordinates = (countryCoordinates) => ({ type: SET_COUNTRY_COORDINATES, countryCoordinates})
export const setLatLng = (latLng) => ({ type: SET_LATLNG, latLng})

export default searchReducer;