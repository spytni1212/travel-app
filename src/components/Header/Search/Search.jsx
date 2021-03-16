import React from 'react'
import s from './Search.module.css'


const Search = ({inputSearch, value, buttonSearch, clearValur}) => {
    return (
        <div className={s.searchContainer}>
            <input className={s.searchBar} autoFocus={true} type="text" value={value} placeholder='search country...' onChange={inputSearch}/>
            {value !== '' && <button className={s.removeSearchButton} onClick={()=>{clearValur()}}>X</button>}
            <button className={s.searchButton} onClick={()=>{buttonSearch(value)}}>&#128269;</button>
        </div>
    )
}

export default Search;