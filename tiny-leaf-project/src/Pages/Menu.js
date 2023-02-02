import React from 'react';
import Hero from '../images/menuhero.png';
import Backgroundpic from '../images/Backgroundmenu.png';
import '../layout/Globals.css';
import specials from '../images/specialsmenu.png'




const Menu = () => {
  return (
    <div>
      <img src={Hero} alt="hero-menu" />
      <div className="menu-container">
        <div className="menu-item">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
          <h1>Loose leaf teas</h1>
          <h2>Darjeeling</h2>
          <p>A refined and ligh Black tea from the region the Tibetans call “country of storms” after the thick mist that rests on the plantations</p>
          <div className="price">
            <p>Price: £4.50</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Blue Earl Grey</h2>
          <p>A delicate blend of blueberry flower and sunflower petals with Earl Grey aromas</p>
          <div className="price">
            <p>Price: £4.50</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Organic Mango and Papaya</h2>
          <p>A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea, along with dried mango and papaya for a sweet exotic flavour</p>
          <div className="price">
            <p>Price: £5</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>White Magic</h2>
          <p>White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot</p>
          <div className="price">
            <p>Price: £5</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Wise Flower</h2>
          <p>An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.</p>
          <div className="price">
            <p>Price: £5</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Night at the Palace</h2>
          <p>Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends</p>
          <div className="price">
            <p>Price: £5.50</p>
          </div>
        </div>
      </div>
      <img src={specials} alt="hero" className="frame"  />
      <div className="menu-container2" >
    
        <div className="menu-item">
        <h1 className="special-week">Special this week...</h1>
          <h2>Sticky Almond</h2>
          <p>Organic Sencha Green tea from China, mixed with apple, cinnamon, ginger and vanilla</p>
          <div className="price">
            <p>Price: £5.50</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Green Sun</h2>
          <p>Blood orange and orange bark make this a fruity and delightfully sour tea</p>
          <div className="price">
            <p>Price: £5.50</p>
          </div>
        </div>
        <div className="menu-item">
          <h2>Christmas Special</h2>
          <p>Organic Assam Black tea with cinnamon, caradamon and pineapple </p>
          <div className="price">
            <p>Price: £6</p>
            </div>
          </div>
          <div className="background-pic-container">
          <img src={Backgroundpic} alt="background" />
         <div className="centered-content">
        <h3>{"For anything from a catchup with a long lost friend to a book club gathering... we’re always ready to put the kettle on."}</h3>
    <button className="reserve-button">Reserve</button>
  </div>
  </div>
  </div>
</div>
  )
}

export default Menu
