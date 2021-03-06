import React from 'react'
import Country from './Country';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CountryContainer = (props) => {
    let countryDataId = props.match.params.countryId
    let countryDataInfo = props.countriesData.find(countryData => countryData.id === countryDataId)
    console.log(countryDataInfo)
    return (
        <Country countryData = {countryDataInfo}/>
    )
}

let mapStateToProps = (state) => {
    return {
        countriesData: state.mainPage.countriesCardsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let WithUrlDataCountryId = withRouter(CountryContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataCountryId)