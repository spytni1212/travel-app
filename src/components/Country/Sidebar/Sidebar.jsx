import React from 'react'
import s from './Sidebar.module.css';
import CurrencyContainer from './Currency/Currency';
import DateContainer from './Date/DateContainer';
import WeatherContainer from './Weather/WeatherContainer';

const Sidebar = (props) => {
    return (
        <div className={s.sidebarContainer}>
            <div className={s.sidebar}>
                <DateContainer />
                <WeatherContainer />
                <CurrencyContainer />
            </div>
        </div>
    )
}

export default Sidebar