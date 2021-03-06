import { combineReducers, createStore, compose } from 'redux';
import mainPageReducer from './mainPage-reducer';

let reducers = combineReducers({
    mainPage : mainPageReducer,
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;