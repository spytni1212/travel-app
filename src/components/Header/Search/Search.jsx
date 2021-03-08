import React from 'react'
import s from './Search.module.css'

const Search = ({inputSearch}) => {


    return (
        <div className={s.searchContainer}>
            <input type="text" placeholder='search country...' onChange={inputSearch}/>
        </div>
    )
}

export default Search;