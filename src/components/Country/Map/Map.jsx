import React from 'react'
import { connect } from 'react-redux'
import { YMaps, Map, Placemark} from 'react-yandex-maps';
import s from './Map.module.css';

const MapContainer = (props) => {

    return (    
        <YMaps query = { { load: 'package.full',  lang: 'en_US'} }>
            <div className={s.mapContainer}>            
                <Map defaultState={{ center: props.capitalCoordinates, zoom: 7 }} className={s.map}>
                    <Placemark geometry={props.capitalCoordinates}></Placemark>
                </Map>
            </div>
        </YMaps>
    )
    
}


let mapStateToProps = (state) => {
    return {
        capitalCoordinates: state.mainPage.currentCountry.capitalCoordinates,
        country: state.mainPage.currentCountry.country

    }
}

export default connect(mapStateToProps)(MapContainer)