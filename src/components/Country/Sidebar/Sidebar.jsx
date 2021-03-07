import React from 'react'
import s from './Sidebar.module.css';
import Currency from './Currency/Currency';
import DateContainer from './Date/DateContainer';
import Weather from './Weather/Weather';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <DateContainer />
            <Currency />
            <Weather />
        </div>
    )
}

export default Sidebar