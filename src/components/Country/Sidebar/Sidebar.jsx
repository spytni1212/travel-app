import React from 'react'
import s from './Sidebar.module.css';
import Currency from './Currency/Currency';
import DateContainer from './Date/DateContainer';
import WeatherContainer from './Weather/WeatherContainer';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <DateContainer />
            <WeatherContainer />
            <Currency />
        </div>
    )
}

export default Sidebar