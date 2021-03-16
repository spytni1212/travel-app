const SET_BYN_CURRENCY = 'SET_BYN_CURRENCY';
const SET_USD_CURRENCY = 'SET_USD_CURRENCY';
const SET_EUR_CURRENCY = 'SET_EUR_CURRENCY';

let initialState = {
    byn: '',
    usd: '',
    eur: '',
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BYN_CURRENCY:
            return { ...state, byn: action.byn }
        case SET_USD_CURRENCY:
            return { ...state, usd: action.usd }
        case SET_EUR_CURRENCY:
            return { ...state, eur: action.eur }
        default:
            return state
    }
}

export const setCurBYN = (byn) => ({ type: SET_BYN_CURRENCY, byn })
export const setCurUSD = (usd) => ({ type: SET_USD_CURRENCY, usd })
export const setCurEUR = (eur) => ({ type: SET_EUR_CURRENCY, eur })

export default currencyReducer;