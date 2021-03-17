import React from 'react'
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import s from './Video.module.css';

const Video = (props) => {
    return (
        <div className={s.videoContainer}>
            <h2 style={{textAlign:'center'}}>Learn more about {props.country}</h2>
            <div className={s.video}>
                <ReactPlayer url ={props.videoAboutCountry} controls width='100%' height='100%'/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        videoAboutCountry: state.mainPage.currentCountry.videoAboutCountry,
        country:state.mainPage.currentCountry.country
    }
}

export default connect(mapStateToProps)(Video);