import React from 'react';
import { connect } from 'react-redux';
import s from './CountryDescription.module.css';

const CountryDescription = (props) => {
    return (
        <div style={{padding:'50px 0'}}>
        <h2 style={{textAlign:'center'}}>About {props.country}</h2>
        <div className={s.countryDescriptionContainer}>
            <div className={s.description}>{props.shortDescription}</div>
            <div className={s.imageContainer}>
                <img className={s.imageCountry} src={`.${props.capitalIMG}`} alt={props.country}/>
            </div>
        </div>
        </div>
    )
}

let countryDescriptionStateToProps = (state) => {
    return {
        shortDescription: state.mainPage.currentCountry.shortDescription,
        capitalIMG: state.mainPage.currentCountry.capitalIMG,
        country:state.mainPage.currentCountry.country
    }
}

export default connect(countryDescriptionStateToProps)(CountryDescription)