import Hero from "../Pages/Hero";
import Footer from "../layout/Footer.js";
import Header from "./Header";
import Home from "../Pages/Home.js"
import Reservation from "../Pages/Reservation"
import heroImage from "../images/heroImage.jpeg"




const Layout = ({children}) => {
return (
<>
<Header/>
{children}
<Footer />
</>
);
};

export default Layout;

