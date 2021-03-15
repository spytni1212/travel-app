import React from 'react'
import { NavLink } from 'react-router-dom';
import CardContainer from './Card/CardContainer';
import s from './Main.module.css';

const Main = (props) => {

    let state = props.mainPage;

    let countriesCards = state.copyCountryData.map(countryCard => 
        <NavLink to={`/country/${countryCard.id}`} key={countryCard.id}>
            <CardContainer {...countryCard}/>
        </NavLink>)

    return (
        <div className={s.mainContainer}>
            <div className={s.mainWrapper}>
                <div className={s.cardsContainer}>
                    {countriesCards}
                </div>
            </div>
        </div>
    )
}

export default Main;