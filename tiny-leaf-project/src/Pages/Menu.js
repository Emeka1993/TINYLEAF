import React from 'react';
import Hero from '../images/menuhero.png';
import Backgroundpic from '../images/backgroundpic2.jpeg';
import specials from '../images/specialsmenu.png'
import Header from '../layout/Header';
import '../layout/Menu.css'




const Menu = () => {
  return (
    <div>
      <img src={Hero} alt="" className="menupic-hero"/>
      <div className="container">
        <h1>Loose Leaf Teas</h1>

        <h2 className="subtitle">Darjeeling</h2>
        <p className="ptag">A refined and ligh Black tea from the region the Tibetans call “country of storms” after the thick mist that rests on the plantations</p>
        <p className="price">£4.50</p>

        <h2 className="subtitle">Blue Earl Grey</h2>
        <p className="ptag">A delicate blend of blueberry flower and sunflower petals with Earl Grey aromas</p>
        <p className="price">£4.50</p>

        <h2 className="subtitle">Organic Mango and Papaya</h2>
        <p className="ptag">A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea, along with dried mango and papaya for a sweet exotic flavour</p>
        <p className="price">£5</p>

        <h2 className="subtitle">White Magic</h2>
        <p className="ptag">White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot</p>
        <p className="price">£5</p>

        <h2 className="subtitle">Wise Flower</h2>
        <p className="ptag">An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.</p>
        <p className="price">£5</p>

        <h2 className="subtitle">Night at the Palace</h2>
        <p className="ptag">Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends</p>
        <p className="price">£5.50</p>
      </div>
      <div className="special-week">
        <h1>Special Week</h1>

        <div className="gold-biscuit">
          <h2 className="subtitle">White Magic</h2>
          <p className="ptag">White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot</p>
          <p className="price">£5</p>

          <h2 className="subtitle">Wise Flower</h2>
          <p className="ptag">An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.</p>
          <p className="price">£5</p>

          <h2 className="subtitle">Night at the Palace</h2>
          <p className="ptag">Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends</p>
          <p className="price">£5.50</p>
        </div>
        <img src={Backgroundpic} alt="" className="menupic"/>
        <div className="Eba">
      <h1 className="Eba-title">Eba</h1>
      <p className="Eba-subtitle">
        For anything from a catchup with a long lost friend to a book club gathering... we’re always ready to put the kettle on.
      </p>
      <button className="Eba-button">Reserve a Table</button>
    </div>
      </div>
    </div>

  );
}

export default Menu