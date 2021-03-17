import React from "react";
import { NavLink } from "react-router-dom";
import CardContainer from "./Card/CardContainer";
import s from "./Main.module.css";

import "././Card/Card.css";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const Main = (props) => {
  let state = props.mainPage;

  let countriesCards = state.copyCountryData.map((countryCard) => (
      <CSSTransition
        key={countryCard.id}
        timeout={500}
        unmountOnExit
        appear 
        classNames="item"
      >
    <NavLink to={`/country/${countryCard.id}`} >
      <CardContainer {...countryCard} />
    </NavLink>
    </CSSTransition>
  ));

  return (
    <div className={s.mainContainer}>
      <div className={s.mainWrapper}>
        <div className={s.cardsContainer}>
          <TransitionGroup
            timeout={500}
            component="div"
            className={s.cardsContainer}
          >
            {countriesCards}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Main;
