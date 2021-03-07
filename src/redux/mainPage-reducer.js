const SET_CURRENT_COUNTRY_DATA = 'SET_CURRENT_COUNTRY_DATA';

let initialState = {
    countriesCardsData : [
        { id: '1', country: 'Russia', capital: 'Moscow' , capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '2', country: 'Germany', capital: 'Berlin' , capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '3', country: 'France', capital: 'Paris' , capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '4', country: 'Great Britain', capital: 'London', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '5', country: 'Belarus', capital: 'Minsk', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '6', country: 'Italy', capital: 'Rome', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '7', country: 'China', capital: 'Beijing', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '8', country: 'USA', capital: 'Washington', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '9', country: 'Turkey', capital: 'Istanbul', capitalIMG: "./img/Belarus/Minsk.jpg",
    },
        { id: '10', country: 'Canada', capital: 'Ottawa', capitalIMG: "./img/Belarus/Minsk.jpg",
    }
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