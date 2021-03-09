const SET_CURRENT_COUNTRY_DATA = 'SET_CURRENT_COUNTRY_DATA';
const SET_CURRENT_COUNTRY_CURRENCY = 'SET_CURRENT_COUNTRY_CURRENCY';

let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow', capitalIMG: "./img/Russia/Moscow.jpg", timeZone: 'Europe/Moscow', videoAboutCountry: 'https://www.youtube.com/watch?v=YrNxPr4PKQo', currency: "RUB"},
        { id: '2', country: 'Germany', capital: 'Berlin', capitalIMG: "./img/Germany/Berlin.jpg", timeZone: 'Europe/Berlin', videoAboutCountry: 'https://www.youtube.com/watch?v=IPbzWJNmndY', currency: "EUR"},
        { id: '3', country: 'France', capital: 'Paris', capitalIMG: "./img/France/Paris.jpg", timeZone: 'Europe/Paris', videoAboutCountry: 'https://www.youtube.com/watch?v=2N7l6SSKeds', currency: "EUR"},
        { id: '4', country: 'Great Britain', capital: 'London', capitalIMG: "./img/GreatBritain/London.jpg", timeZone: 'Europe/London', videoAboutCountry: 'https://www.youtube.com/watch?v=PtWeqZsuzpE', currency: "GBP"},
        { id: '5', country: 'Belarus', capital: 'Minsk', capitalIMG: "./img/Belarus/Minsk.jpg", timeZone: 'Europe/Minsk', videoAboutCountry: 'https://www.youtube.com/watch?v=LrIoX0UVeSk', currency: "BYN"},
        { id: '6', country: 'Italy', capital: 'Rome', capitalIMG: "./img/Italy/Rome.jpg", timeZone: 'Europe/Rome', videoAboutCountry: 'https://www.youtube.com/watch?v=FlRwssZYRM0&t=79s', currency: "EUR"},
        { id: '7', country: 'China', capital: 'Beijing', capitalIMG: "./img/China/Beijing.jpg", timeZone: 'Etc/GMT+8', videoAboutCountry: 'https://www.youtube.com/watch?v=tBNkeXmq4IQ', currency: "CNY"},
        { id: '8', country: 'USA', capital: 'Washington', capitalIMG: "./img/USA/Washington.jpg", timeZone: 'Etc/GMT-5', videoAboutCountry: 'https://www.youtube.com/watch?v=b7FNvq11CEw', currency: "USD"},
        { id: '9', country: 'Turkey', capital: 'Istanbul', capitalIMG: "./img/Turkey/Istanbul.jpg", timeZone: 'Europe/Istanbul', videoAboutCountry: 'https://www.youtube.com/watch?v=r8rZQKXijb8', currency: "TRY"},
        { id: '10', country: 'Canada', capital: 'Ottawa', capitalIMG: "./img/Canada/Ottawa.jpg", timeZone: 'Etc/GMT-5', videoAboutCountry: 'https://www.youtube.com/watch?v=BHdIQy00_p4', currency: "CAD" }
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