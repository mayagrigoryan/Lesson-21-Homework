import { NavLink, useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import React, { useContext } from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { MyContext } from '../../context/context';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, user, basket } = useContext(MyContext);
  const navigate = useNavigate();
  const isBasketEmpty = basket.length === 0;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    navigate('/login');
  };

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
          {isLoggedIn ? (
            <div className={style.basketBlock}>
              <sup>{user?.name}</sup>
              <sup onClick={handleLogout} className={style.logoutBtn}>Log out</sup>
            </div>

          ) : (
            <NavLink to='/login'>
              <CiUser />
              <sup>Log in</sup>
            </NavLink>
          )}

        </div>

      </div>
    </header>
  )
}

export default Header