import Hero from "../Pages/Hero";
import Footer from "../layout/Footer.js";
import Header from "./Header";
import Home from "../Pages/Home.js"
import Reservation from "../Pages/Reservation"



const Layout = ({children}) => {
return (
<>
<Header/>
<Hero />
{children }
<Home />
<Reservation />
<Footer />
</>
);
};


export default Layout;

