import React from 'react'
import * as axios from 'axios';
import { connect } from 'react-redux'
import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';
import { setCountryCoordinates, setLatLng } from '../../../redux/map-reducer';
import s from './Map.module.css';

class MapContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/capital/${this.props.capital}`)
        .then(response =>{
            this.props.setLatLng(response.data[0].latlng)
            console.log(response.data[0].latlng)
        })

        axios.get(`https://nominatim.openstreetmap.org/search.php?country=${this.props.country}&polygon_geojson=1&format=jsonv2`)
        .then(response => {
            this.props.setCountryCoordinates(response.data[0].geojson.coordinates)
        })
    }

    render() {
        return (    
            <YMaps query = { { load: 'package.full' } }>
                <div className={s.mapContainer}>            
                    <Map defaultState={{ center: this.props.latLng, zoom: 3 }}>
                        <Placemark geometry={this.props.latLng}></Placemark>
                        <Polygon 
                            geometry={this.props.countryCoordinates}
                            options={{
                                strokeWidth: 2,
                                fillColor: 'cccc99',
                                strokeColor: 'ccffcc',
                                opacity: 0.35,
                                hasHint: true
                              }}>
                        </Polygon>   
                    </Map>
                </div>
            </YMaps>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        country: state.mainPage.currentCountry.country,
        capital: state.mainPage.currentCountry.capital,
        latLng: state.map.latLng,
        countryCoordinates: state.map.countryCoordinates,

    }
}


export default connect(mapStateToProps, { setLatLng, setCountryCoordinates })(MapContainer)