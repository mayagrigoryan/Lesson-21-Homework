import { NavLink } from 'react-router-dom'
import { CiUser } from "react-icons/ci";

import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = ({ basket }) => {

  const isBasketEmpty = basket.length === 0;

  return (
    <header className={style.header}>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>

      <NavLink to='/' className={style.logoBlock}>
        <img src={logo} alt='logo' />
      </NavLink>

      <div className={style.basketBlock}>

        <div>
          <NavLink to='/basket' className={isBasketEmpty ? style.disabledLink : ''}>🛒</NavLink>
          <sup>{basket.length}</sup>
        </div>

        <div>
          <NavLink to='/login'>
            <CiUser />
            <sup>Log in</sup>
          </NavLink>
        </div>

      </div>
    </header>
  )
}

export default Header