import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Logo.module.css'

const Logo = (props) => {
    return (
        <NavLink to='/' className = {s.logo}>
            <span className={s.logoText}>My Travel App</span>
        </NavLink>
        
    )
}

export default Logo;