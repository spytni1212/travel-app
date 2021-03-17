import React from 'react';
import { connect } from 'react-redux';
import { setCountryAC } from '../../../redux/countryReducer';
import Attractions from './Attractions';

const AttractionsContainer = (props) => {
    const country = props.countryData.country
    return (
        <Attractions country={country}/>
    )
}

const mapStateToProps = (state) => {
    return {
        countryData: state.mainPage.currentCountry,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCountry: (country) => {
            dispatch(setCountryAC(country));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsContainer);