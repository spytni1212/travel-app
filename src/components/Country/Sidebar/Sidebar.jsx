import React from 'react'
import s from './Sidebar.module.css';
import Currency from './Currency/Currency';
import Date from './Date/Date';
import Weather from './Weather/Weather';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Date />
            <Currency />
            <Weather />
        </div>
    )
}

export default Sidebar