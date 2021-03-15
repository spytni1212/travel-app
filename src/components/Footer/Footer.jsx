import React from 'react'
import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={s.footer}>
            <div className={s.footerWrapper}>
                <span className={s.text}> RSS2021 React (our github) </span>
            </div>
        </div>
    )
}

export default Footer;