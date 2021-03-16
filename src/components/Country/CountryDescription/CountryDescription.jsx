import React from 'react';
import { connect } from 'react-redux';
import s from './CountryDescription.module.css';

const CountryDescription = (props) => {
    return (
        <div className={s.countryDescriptionContainer}>
            <div className={s.description}>{props.shortDescription}</div>
            <div className={s.imageContainer}>
                <img className={s.imageCountry} src={`.${props.capitalIMG}`} />
            </div>
        </div>
    )
}

let countryDescriptionStateToProps = (state) => {
    return {
        shortDescription: state.mainPage.currentCountry.shortDescription,
        capitalIMG: state.mainPage.currentCountry.capitalIMG
    }
}

export default connect(countryDescriptionStateToProps)(CountryDescription)