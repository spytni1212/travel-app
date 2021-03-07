import { combineReducers, createStore, compose } from 'redux';
import mainPageReducer from './mainPage-reducer';
import countryReducer from './country-reducer';
import dateReducer from './date-reducer';

let reducers = combineReducers({
    mainPage : mainPageReducer,
    countryData: countryReducer,
    date: dateReducer
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;