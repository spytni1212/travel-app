import { combineReducers, createStore, compose } from 'redux';
import mainPageReducer from './mainPage-reducer';
import dateReducer from './date-reducer';
import searchReducer from './search-reducer';
import appReducer from './app-reducer';
import currencyReducer from './currency-reducer';
import weatherReducer from './weatherReducer';
import countryReducer from './countryReducer';


let reducers = combineReducers({
    app: appReducer,
    mainPage : mainPageReducer,
    date: dateReducer,
    search: searchReducer,
    currency: currencyReducer,
    weather: weatherReducer,
    country:countryReducer,
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;