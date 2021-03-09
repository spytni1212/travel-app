import React from 'react'
import Search from './Search';
import {setValue} from '../../../redux/search-reducer'
import { connect } from 'react-redux';
import s from './Search.module.css'

const SearchContainer = (props) => {
    
    let state = props.search;

    const inputSearch = (e) => {
        props.setValue(e.target.value)
    }

    return (
        <Search inputSearch={inputSearch} value={state.value}/>
    )
}

let mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
        search: state.search
    }
}



export default connect(mapStateToProps,{setValue})(SearchContainer);