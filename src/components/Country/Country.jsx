import React from 'react'
import s from './Country.module.css';
import Sidebar from './Sidebar/Sidebar';
import CountryDescription from './CountryDescription/CountryDescription';
import Attractions from './Attractions/Attractions';
import Video from './Video/Video';
import Map from './Map/Map';

const CountryContainer = (props) => {
    return (
        <div className={s.country}>
            <Sidebar />
            <CountryDescription />
            <Attractions />
            <Video />
            <Map />
        </div>
    )
}

export default CountryContainer