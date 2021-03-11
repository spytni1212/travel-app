import React from "react";
import Search from "./Search";
import { setValue } from "../../../redux/search-reducer";
import { connect } from "react-redux";
import { setCopyContriesDataAC } from "../../../redux/mainPage-reducer";
import s from "./Search.module.css";
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

  let stateApp = props.app;
  let state = props.search;

    const clearValur = () => {
        props.setValue('');
        props.setCopyContriesDataAC(stateApp.countriesCardsData);
    }

  const inputSearch = (e) => {
    props.setValue(e.target.value);
    let newState = stateApp.countriesCardsData.slice();

    const filterArr = newState
      .filter((p) => {
        return  p.country.toLowerCase().includes(e.target.value) || p.capital.toLowerCase().includes(e.target.value) || p.country.toUpperCase().includes(e.target.value) || p.capital.toUpperCase().includes(e.target.value);
      }).slice(0, 15);
      
      props.setCopyContriesDataAC(filterArr);
  };

  const buttonSearch = (value) => {

    let newState = stateApp.countriesCardsData.slice();

    const filterArr = newState
      .filter((p) => {
        return  p.country.toLowerCase().includes(value) || p.capital.toLowerCase().includes(value) || p.country.toUpperCase().includes(value) || p.capital.toUpperCase().includes(value);
      }).slice(0, 15);   
    
    props.setCopyContriesDataAC(filterArr);
  }

  return <Search inputSearch={inputSearch} buttonSearch={buttonSearch} clearValur={clearValur} value={state.value} />;
};

let mapStateToProps = (state) => {
  return {
    app: state.app,
    mainPage: state.mainPage,
    search: state.search,
  };
};

export default connect(mapStateToProps, { setValue, setCopyContriesDataAC })(
  SearchContainer
);
