import { NavLink } from 'react-router-dom'

import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={style.header}>
        <nav>
            <NavLink to='/'>Home</NavLink>
        </nav>
        
        <div className={style.logoBlock}>
            <img src={logo} alt='logo'/>
        </div>

        <div className={style.basketBlock}>
            <NavLink to='/basket'>🛒</NavLink>
        </div>
    </header>
  )
}

export default Header