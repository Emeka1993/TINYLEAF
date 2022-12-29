import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
    <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservation">Reservation</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>


    
  )
}

export default Header
