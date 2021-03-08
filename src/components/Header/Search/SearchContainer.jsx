import React from 'react'
import Search from './Search';
import s from './Search.module.css'

const SearchContainer = (props) => {

    const inputSearch = (e) => {
        console.log(e.target.value)
    }

    return (
        <Search inputSearch={inputSearch}/>
    )
}

export default SearchContainer;