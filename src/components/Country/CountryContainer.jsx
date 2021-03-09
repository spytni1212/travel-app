import React from 'react'
import Country from './Country';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentCountryDataAC } from '../../redux/mainPage-reducer';

const CountryContainer = (props) => {
    let countryDataId = props.match.params.countryId
    let countryDataInfo = props.countriesData.find(countryData => countryData.id === countryDataId)
    
    props.setCurrentCountryData(countryDataInfo);
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
        setCurrentCountryData: (countryData) => {
            dispatch(setCurrentCountryDataAC(countryData))
        }
    }
}

let WithUrlDataCountryId = withRouter(CountryContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataCountryId)