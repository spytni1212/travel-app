import React from 'react'
import s from './Map.module.css';

const Map = (props) => {
    return (
        <div className={s.mapContainer}>
            <div className={s.map}>Map</div>
        </div>
    )
}

export default Map;