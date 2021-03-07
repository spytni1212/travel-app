const SET_YEAR = 'SET_YEAR';
const SET_MONTH_NAME = 'SET_MONTH_NAME';
const SET_DATA = 'SET_DATA';
const SET_WEEKDAY_NAME = 'SET_WEEKDAY_NAME';
const SET_HOUR = 'SET_HOUR';
const SET_MIN = 'SET_MIN';
const SET_SEC = 'SET_SEC';

let initialState = {
    year: '',
    monthName: '',
    data: '',
    weekdayName: '',
    hour: '',
    min: '',
    sec: ''
}

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_YEAR:
            return { ...state, year: action.year }
        case SET_MONTH_NAME:
            return { ...state, monthName: action.month }
        case SET_DATA:
            return { ...state, data: action.data }
        case SET_WEEKDAY_NAME:
        return { ...state, weekdayName: action.weekdayName }
        case SET_HOUR:
        return { ...state, hour: action.hour }
        case SET_MIN:
        return { ...state, min: action.min }
        case SET_SEC:
        return { ...state, sec: action.sec }
        default:
            return state
    }
}

export const setYearAC = (year) => ({ type: SET_YEAR, year })
export const setMonthNameAC = (month) => ({ type: SET_MONTH_NAME, month })
export const setDataAC = (data) => ({ type: SET_DATA, data })
export const setWeekdayNameAC = (weekdayName) => ({ type: SET_WEEKDAY_NAME, weekdayName })
export const setHourAC = (hour) => ({ type: SET_HOUR, hour })
export const setMinAC = (min) => ({ type: SET_MIN, min })
export const setSecAC = (sec) => ({ type: SET_SEC, sec })

export default dateReducer;