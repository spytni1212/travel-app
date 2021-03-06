import React from 'react'
import s from './Language.module.css';

const Language = (props) => {
    return (
        <div>
            <select>
                <option>ru</option>
                <option>en</option>
                <option>de</option>
            </select>
        </div>
    )
}

export default Language;