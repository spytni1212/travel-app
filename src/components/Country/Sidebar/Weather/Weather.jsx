import React from 'react';
import style from './Weather.module.css';
import s from './Weather.module.css';

const Weather = (props) => (
    <div className={s.weatherContainer}>
        <div>{Math.round(props.temperature)}°C
            <i className={`${style.icon} owf owf-${props.icon}`}/>
        </div>
        <div>{props.weatherDescription}</div>
        <div>humidity: {props.humidity}%</div>
        <div>wind: {props.wind} m/s</div>  
    </div>
)
export default Weather;