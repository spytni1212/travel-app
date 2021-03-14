
let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow', capitalIMG: "./img/Russia/Moscow.jpg", timeZone: 'Europe/Moscow', videoAboutCountry: 'https://www.youtube.com/watch?v=YrNxPr4PKQo', currency: "RUB", capitalCoordinates: [55.78, 37.62]},
        { id: '2', country: 'Germany', capital: 'Berlin', capitalIMG: "./img/Germany/Berlin.jpg", timeZone: 'Europe/Berlin', videoAboutCountry: 'https://www.youtube.com/watch?v=IPbzWJNmndY', currency: "EUR", capitalCoordinates: [52.50, 13.36]},
        { id: '3', country: 'France', capital: 'Paris', capitalIMG: "./img/France/Paris.jpg", timeZone: 'Europe/Paris', videoAboutCountry: 'https://www.youtube.com/watch?v=2N7l6SSKeds', currency: "EUR", capitalCoordinates: [48.85, 2.34]},
        { id: '4', country: 'Great Britain', capital: 'London', capitalIMG: "./img/GreatBritain/London.jpg", timeZone: 'Europe/London', videoAboutCountry: 'https://www.youtube.com/watch?v=PtWeqZsuzpE', currency: "GBP", capitalCoordinates: [51.51, -0.30]},
        { id: '5', country: 'Belarus', capital: 'Minsk', capitalIMG: "./img/Belarus/Minsk.jpg", timeZone: 'Europe/Minsk', videoAboutCountry: 'https://www.youtube.com/watch?v=LrIoX0UVeSk', currency: "BYN", capitalCoordinates: [53.91, 27.53]},
        { id: '6', country: 'Italy', capital: 'Rome', capitalIMG: "./img/Italy/Rome.jpg", timeZone: 'Europe/Rome', videoAboutCountry: 'https://www.youtube.com/watch?v=FlRwssZYRM0&t=79s', currency: "EUR", capitalCoordinates: [41.90, 12.50]},
        { id: '7', country: 'China', capital: 'Beijing', capitalIMG: "./img/China/Beijing.jpg", timeZone: 'Etc/GMT+8', videoAboutCountry: 'https://www.youtube.com/watch?v=tBNkeXmq4IQ', currency: "CNY", capitalCoordinates: [39.90, 116.42]},
        { id: '8', country: 'USA', capital: 'Washington', capitalIMG: "./img/USA/Washington.jpg", timeZone: 'Etc/GMT-5', videoAboutCountry: 'https://www.youtube.com/watch?v=b7FNvq11CEw', currency: "USD", capitalCoordinates: [38.93, -77.11]},
        { id: '9', country: 'Turkey', capital: 'Istanbul', capitalIMG: "./img/Turkey/Istanbul.jpg", timeZone: 'Europe/Istanbul', videoAboutCountry: 'https://www.youtube.com/watch?v=r8rZQKXijb8', currency: "TRY", capitalCoordinates: [41.00, 28.96]},
        { id: '10', country: 'Canada', capital: 'Ottawa', capitalIMG: "./img/Canada/Ottawa.jpg", timeZone: 'Etc/GMT-5', videoAboutCountry: 'https://www.youtube.com/watch?v=BHdIQy00_p4', currency: "CAD", capitalCoordinates: [45.22, -75.79] }
    ],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default appReducer;