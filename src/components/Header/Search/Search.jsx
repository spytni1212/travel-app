import React from 'react'
import s from './Search.module.css'

const Search = ({inputSearch, value}) => {

    return (
        <div className={s.searchContainer}>
            <input type="text" value={value} placeholder='search country...' onChange={inputSearch}/>
        </div>
    )
}

export default Search;