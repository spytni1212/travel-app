import React from 'react'
import s from './Main.module.css';

const Main = (props) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.mainWrapper}>
                <div className={s.cardsContainer}>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                </div>
            </div>
            
        </div>
    )
}

export default Main;