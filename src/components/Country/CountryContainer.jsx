import React, { useEffect, useState } from 'react'
import Country from './Country';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentCountryDataAC } from '../../redux/mainPage-reducer';

const CountryContainer = (props) => {
    const [loding, setLoding] = useState(false)

    useEffect(()=>{
        let countryDataId = props.match.params.countryId
        let countryDataInfo = props.countriesData.find(countryData => countryData.id === countryDataId)
        
        props.setCurrentCountryData(countryDataInfo);

        setLoding(true)
    },[])

    

    return (
        <>
        {loding !== false ? <Country /> : "loading"} 
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        countriesData: state.app.countriesCardsData
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