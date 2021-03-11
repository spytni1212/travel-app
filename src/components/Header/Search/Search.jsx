import React, { useRef } from 'react'
import s from './Search.module.css'

const Search = ({inputSearch, value, buttonSearch, clearValur}) => {
    const ref = useRef()

    

    return (
        <div className={s.searchContainer}>
            <input type="text" value={value} placeholder='search country...' onChange={inputSearch}/>
            {value !== '' && <button onClick={()=>{clearValur()}}>X</button>}
            <button onClick={()=>{buttonSearch(value)}}>Search</button>
        </div>
    )
}

export default Search;