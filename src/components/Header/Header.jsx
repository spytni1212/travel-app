import React from 'react'
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Language from './Languages/Language';

const Header = (props) => {
    return (
        <div className = {s.header}>
            <div className = {s.headerWrapper}>
                <Logo />
                <Search />
                <Language />
            </div>
        </div>
    )
}

export default Header;