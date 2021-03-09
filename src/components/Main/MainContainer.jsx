import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Main from './Main';
import { setCopyContriesDataAC } from '../../redux/mainPage-reducer';

const MainContainer = (props) => {
    let state = props.app
    

    useEffect(()=>{
        props.setCopyContriesDataAC(state.countriesCardsData)
    },[])

    return (<Main {...props}/>)
}


const mapStateToProps = (state) => {
    return {
        app: state.app,
        mainPage: state.mainPage,
    }
}

export default connect(mapStateToProps, {setCopyContriesDataAC})(MainContainer);
