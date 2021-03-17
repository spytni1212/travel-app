import React from 'react'
import { connect } from 'react-redux'
import { YMaps, Map, Placemark} from 'react-yandex-maps';
import s from './Map.module.css';

const MapContainer = (props) => {

    return (  
        <div>
            <h2 style={{textAlign:'center'}}>See the country on the map</h2>  
            <YMaps query = { { load: 'package.full',  lang: 'en_US'} }>
                <div className={s.mapContainer}>            
                    <Map defaultState={{ center: props.capitalCoordinates, zoom: 7 }} width='100%' height='100%'>
                        <Placemark geometry={props.capitalCoordinates}></Placemark>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
    
}


let mapStateToProps = (state) => {
    return {
        capitalCoordinates: state.mainPage.currentCountry.capitalCoordinates,
        country: state.mainPage.currentCountry.country

    }
}

export default connect(mapStateToProps)(MapContainer)