import React from 'react'
import s from './CountryDescription.module.css';

const CountryDescription = (props) => {
    return (
        <div className={s.countryDescriptionContainer}>
            <div className={s.description}>
                 Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book. It has
                 survived not only five centuries, but also the leap
                 nto electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the
                 release of Letraset sheets containing Lorem Ipsum passage
                 s, and more recently with desktop publishing software like
                 Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className={s.imageCountry}>image</div>
        </div>
    )
}

export default CountryDescription;