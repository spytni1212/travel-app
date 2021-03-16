import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Logo.module.css'

const Logo = (props) => {
    return (
        <NavLink to='/' className = {s.logo}>
            <div >
                My Travel App
            </div>
        </NavLink>
        
    )
}

export default Logo;