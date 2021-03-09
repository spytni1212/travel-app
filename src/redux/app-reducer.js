
let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow', capitalIMG: "./img/Russia/Moscow.jpg", timeZone: 'Europe/Moscow'},
        { id: '2', country: 'Germany', capital: 'Berlin', capitalIMG: "./img/Germany/Berlin.jpg", timeZone: 'Europe/Berlin' },
        { id: '3', country: 'France', capital: 'Paris', capitalIMG: "./img/France/Paris.jpg", timeZone: 'Europe/Paris' },
        { id: '4', country: 'Great Britain', capital: 'London', capitalIMG: "./img/GreatBritain/London.jpg", timeZone: 'Europe/London' },
        { id: '5', country: 'Belarus', capital: 'Minsk', capitalIMG: "./img/Belarus/Minsk.jpg", timeZone: 'Europe/Minsk' },
        { id: '6', country: 'Italy', capital: 'Rome', capitalIMG: "./img/Italy/Rome.jpg", timeZone: 'Europe/Rome' },
        { id: '7', country: 'China', capital: 'Beijing', capitalIMG: "./img/China/Beijing.jpg", timeZone: 'Etc/GMT+8' },
        { id: '8', country: 'USA', capital: 'Washington', capitalIMG: "./img/USA/Washington.jpg", timeZone: 'Etc/GMT-5' },
        { id: '9', country: 'Turkey', capital: 'Istanbul', capitalIMG: "./img/Turkey/Istanbul.jpg", timeZone: 'Europe/Istanbul' },
        { id: '10', country: 'Canada', capital: 'Ottawa', capitalIMG: "./img/Canada/Ottawa.jpg", timeZone: 'Etc/GMT-5'}
    ],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default appReducer;