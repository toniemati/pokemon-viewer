import React from 'react'
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const checkPath = (path) => location.pathname === path;


  return (
    <div className="header">
      <div className="header__left">
        <h2>Pokemon Viewer</h2>
      </div>

      <div className="header__right">
        <Link className={ checkPath('/') ? 'active__link' : ''} to="/">Home</Link>
        <span> | </span>
        <Link className={ checkPath('/about') ? 'active__link' : '' } to="about">About</Link>
      </div>
    </div>
  )
}

export default Header
