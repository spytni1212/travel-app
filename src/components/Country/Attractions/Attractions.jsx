import React from 'react'
import s from './Attractions.module.css';

const Attractions = (props) => {
    console.log(props)
    return (
        <div className={s.attractionsContainer}>
            <div className={s.attractionDescription}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not onl
            </div>
            <div className={s.attractionSlider}>
                attraction slider
            </div>
        </div>
    )
}

export default Attractions;