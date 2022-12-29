import React from 'react';
import './Nav.css';
import './Header.css';




// eslint-disable-next-line
const heroimagetinyleaf = 'tiny-leaf-project/src/images/tinyleaf1.jpg';

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
          backgroundImage: `url("tiny-leaf-project/src/images/tinyleaf1.jpg")`,
          height: '500px',
          width: '100%',
          backgroundSize: 'cover',
        }}
      >
        {/* Your content goes here */}
      </div>
      </header>
    </div>
  );
};

export default Layout;

