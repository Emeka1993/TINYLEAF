import '../layout/Globals.css';
import '../layout/Hero.css';





import blends from '../images/blends.jpeg'
import teapot from '../images/teapot.png'
import flowerspic from '../images/flowersimage.png'
import blue from '../images/blue.png'
import Hero from './Hero';
import heroImage from "../images/heroImage.jpeg"

import GallerySpin from './GallerySpin';

function Home() {
  return (
  <div>
  <body>
  <Hero img={heroImage} text={'A flavour of all seasons'} />
  <div className="about">
  <section className="about-text">
  <h2>Our blends</h2>
  <p className="paragraph-about-text">
  We make our very own Tiny Leaf blends right here in the tea house,
  offering new flavours according to the season. We source all our
  produce sustainably and make sure the hands that laboured for our
  flavour some cups were rewarded fairly.
  </p>
  <hr className="horizontal-line" />
  <h2 className="subheading-about-text">Hand-picked and sustainable</h2>
  </section>
  <section className="about-img">
  <img src={blends} alt="blendpicture" />
  </section>
  </div>
  <section className="grid-container">
  <div className="green-box"></div>
  <div className="text-box">
  <h3>Wise Leaf evening</h3>
  <p>
  Bringing together those with curious minds, speakers and observers
  alike, our Wise Leaf events are a melting pot to share, reflect and
  contemplate.
  </p>
  </div>
  <img className="teapot" src={teapot} alt="teapot" />
  <img className="flowersimage" src={flowerspic} alt="flowers-pic" />
  </section>
  
    </body>
    <img src={blue} alt="flowers-pic" className="blue-pic" />
        <div className="center">
          <h3>{"Make a reservation"}</h3>
          <p>{"For anything from a catchup with a long lost friend to a book club gathering... we're always ready to put the kettle on."}</p>
          <div className='button'></div>
          <button>{"Reserve a table"}</button>
          <div>
          <GallerySpin />
</div>

   </div> 
   </div>
    );
  }
  export default Home
  
  
  
  