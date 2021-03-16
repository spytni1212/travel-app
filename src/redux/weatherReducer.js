const SET_WEATHER_DESCRIPTION = 'SET_WEATHER_DESCRIPTION';
const SET_ICON = 'SET_ICON';
const SET_TEMPERATURE = 'SET_TEMPERATURE';
const SET_WIND = 'SET_WIND';
const SET_HUMIDITY = 'SET_HUMIDITY';

const weatherInitialState = {
    weatherDescription: '',
    icon: '',
    temperature: '',
    wind: '',
    humidity: '',
}

const weatherReducer = (state = weatherInitialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DESCRIPTION:
            return { ...state, weatherDescription: action.weatherDescription }
        case SET_ICON:
            return { ...state, icon: action.icon }
        case SET_TEMPERATURE:
            return { ...state, temperature: action.temperature }
        case SET_WIND:
            return { ...state, wind: action.wind }
        case SET_HUMIDITY:
        return { ...state, humidity: action.humidity }
        default:
            return state
    }
}

export const setWeatherDescriptionAC = (weatherDescription) => ({ type: SET_WEATHER_DESCRIPTION, weatherDescription })
export const setIconAC = (icon) => ({ type: SET_ICON, icon })
export const setTemperatureAC = (temperature) => ({ type: SET_TEMPERATURE, temperature })
export const setWindAC = (wind) => ({ type: SET_WIND, wind })
export const setHumidityAC = (humidity) => ({ type: SET_HUMIDITY , humidity })

export default weatherReducer;