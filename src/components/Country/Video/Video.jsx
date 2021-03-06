import React from 'react'
import s from './Video.module.css';

const Video = (props) => {
    return (
        <div className={s.videoContainer}>
            <div className={s.video}>video about country</div>
        </div>
    )
}

export default Video;