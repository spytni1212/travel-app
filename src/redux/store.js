import { combineReducers, createStore, compose } from 'redux';
import mainPageReducer from './mainPage-reducer';
import dateReducer from './date-reducer';
import currencyReducer from './currency-reducer';
import weatherReducer from './weatherReducer';

let reducers = combineReducers({
    mainPage : mainPageReducer,
    date: dateReducer,
    currency: currencyReducer,
    weather: weatherReducer,
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;