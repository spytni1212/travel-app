import React from 'react'
import Search from './Search';
import {setValue} from '../../../redux/search-reducer'
import { connect } from 'react-redux';
import s from './Search.module.css'
// import { setCopyContriesDataAC } from '../../redux/mainPage-reducer'

// function addFilterIfNotExists(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     if (index===-1) appliedFilters.push(filter);

//     return appliedFilters;
// }

// function removeFilter(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     appliedFilters.splice(index, 1);
//     return appliedFilters;
// }


const SearchContainer = (props) => {
    
    // let stateMain = props.mainPage;
    let state = props.search;

    const inputSearch = (e) => {
        props.setValue(e.target.value)

        // let newState = Object.assign({}, stateMain.copyCountryData);
        //     let value = e.target.value;
        //     let filteredValues = newState.filter(country => {
        //         return country.country.toLowerCase().includes(value) ||
        //         country.capital.toLowerCase().includes(value);
        //     });

            
        //     console.log(newState)
            // if (value) {
            //     appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);

            //     newState.filteredProducts = filteredValues;
            //     newState.filteredCount = newState.filteredProducts.length;
            //     newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);

            // } else {
            //     appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);

            //     if (appliedFilters.length === 0) {
            //         newState.filteredProducts = newState.products;
            //         newState.filteredCount = newState.filteredProducts.length;
            //         newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);
            //     }
            // }
            // setCopyContriesDataAC(newState)
    }

    return (
        <Search inputSearch={inputSearch} value={state.value}/>
    )
}

let mapStateToProps = (state) => {
    return {
        // mainPage: state.mainPage,
        search: state.search
    }
}



export default connect(mapStateToProps,{setValue})(SearchContainer);