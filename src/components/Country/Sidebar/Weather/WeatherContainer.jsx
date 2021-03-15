import React from 'react';
import { connect } from 'react-redux';
import { setWeatherDescriptionAC, setIconAC, setTemperatureAC, setWindAC, setHumidityAC} from '../../../../redux/weatherReducer';
import axios from 'axios';
import s from './Weather.module.css';
import Weather from './Weather';

class WeatherContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.countryData.capital}&lang=en&appid=33ee77f2c926949a60a1ec25d1144a3c&units=metric`)
        .then(response => {
            const weatherDescription =  response.data.weather[0].description;
            const icon = response.data.weather[0].id;
            const temperature = response.data.main.temp;
            const wind = response.data.wind.speed;
            const humidity = response.data.main.humidity;
            this.props.setWeatherDescription(weatherDescription);
            this.props.setIcon(icon);
            this.props.setTemperature(temperature);
            this.props.setWind(wind);
            this.props.setHumidity(humidity);
        }) 
    }
    render(){
        return (
        <Weather 
            {...this.props.weather}
        />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countryData: state.mainPage.currentCountry,
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeatherDescription: (weatherDescription) => {
            dispatch(setWeatherDescriptionAC(weatherDescription));
        },
        setIcon: (icon) => {
            dispatch(setIconAC(icon));
        },
        setTemperature: (temperature) => {
            dispatch(setTemperatureAC(temperature));
        },
        setWind: (wind) => {
            dispatch(setWindAC(wind));
        },
        setHumidity: (humidity) => {
            dispatch(setHumidityAC(humidity));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);