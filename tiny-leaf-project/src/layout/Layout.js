import React from 'react';
import './Nav.css';
import './Header.css';


// eslint-disable-next-line
const heroimagetinyleaf = 'tiny-leaf-project/src/images/heroimagetinyleaf.jpg';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="/home">Home</a>
          <a href="/Menu">Menu</a>
          <a href="/Reservations">Reservations</a>
        </nav>
        <div
        style={{
          backgroundImage: `url("tiny-leaf-project/src/images/heroimagetinyleaf.jpg")`,
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Your content goes here */}
      </div>
      </header>
    </div>
  );
};

export default Layout;

