import React from 'react'
import { Route } from 'react-router-dom'
import s from './Header.module.css';
import Logo from './Logo/Logo';
import SearchContainer from './Search/SearchContainer';

const Header = (props) => {
    return (
        <div className = {s.header}>
            <div className = {s.headerWrapper}>
                <Logo />
                <Route path='/' component = {SearchContainer} exact/>
            </div>
        </div>
    )
}

export default Header;