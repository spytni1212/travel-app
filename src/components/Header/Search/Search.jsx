import React from 'react'
import s from './Search.module.css'

const Search = (props) => {
    return (
        <div className={s.searchContainer}>
            <input type="text" placeholder='search country...'/>
            <button>search</button>
        </div>
    )
}

export default Search;