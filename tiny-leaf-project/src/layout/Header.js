import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../images/newlogo.png'


function Header() {
  return (
    <div>
        <header className="header">
      <img className='newlogo' src={logo} alt='' srcSet='' />
        <nav className="nav" title="Main navigation">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Header

