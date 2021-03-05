import React from 'react'
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = (props) => {
    return (
        <div className = {s.header}>
            <div className = {s.headerWrapper}>
                <Logo />
                <Search />
            </div>
        </div>
    )
}

export default Header;