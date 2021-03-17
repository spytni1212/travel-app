import React from 'react'
import s from './Country.module.css';
import Sidebar from './Sidebar/Sidebar';
import CountryDescription from './CountryDescription/CountryDescription';
import AttractionsContainer from './Attractions/AttractionsContainer';
import Video from './Video/Video';
import Map from './Map/Map';

const Country = (props) => {
    return (
        <div className={s.country}>
            <Sidebar />
            <CountryDescription />
            <AttractionsContainer />
            <Video />
            <Map />
        </div>
    )
}

export default Country