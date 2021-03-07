import React from 'react'
import Country from './Country';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCountryDataAC } from '../../redux/country-reducer';

const CountryContainer = (props) => {
    
    let countryDataId = props.match.params.countryId
    let countryDataInfo = props.countriesData.find(countryData => countryData.id === countryDataId)
    
    props.setCountryData(countryDataInfo);
    return (
        <Country />
    )
}

let mapStateToProps = (state) => {
    return {
        countriesData: state.mainPage.countriesCardsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountryData: (countryData) => {
            dispatch(setCountryDataAC(countryData))
        }
    }
}

let WithUrlDataCountryId = withRouter(CountryContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataCountryId)