import React from 'react'
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import s from './Video.module.css';

const Video = (props) => {
    return (
        <div className={s.videoContainer}>
            <div className={s.video}>
                <ReactPlayer url ={props.videoAboutCountry} controls width='100%' height='100%'/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        videoAboutCountry: state.mainPage.currentCountry.videoAboutCountry
    }
}

export default connect(mapStateToProps)(Video);