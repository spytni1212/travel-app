import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Main from './Main';
import { setCopyContriesDataAC } from '../../redux/mainPage-reducer';

const MainContainer = (props) => {
    useEffect(()=>{
        const newArr = props.app.countriesCardsData.slice().map((obj)=>{
            return obj= {
                ...obj,
                display: true
            }; 
        })
        props.setCopyContriesDataAC(newArr)
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
