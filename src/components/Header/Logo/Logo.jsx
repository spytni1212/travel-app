import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Logo.module.css'

const Logo = (props) => {
    return (
        <NavLink to='/'>
            <div className = {s.logo}>
                My Travel App
            </div>
        </NavLink>
        
    )
}

export default Logo;