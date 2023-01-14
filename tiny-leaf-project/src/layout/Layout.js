import Hero from "../Pages/Hero";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../Pages/Home.js"



const Layout = ({children}) => {
return (
<>
<Header/>
<Hero />
{children }
<Home />
<Footer />
</>
);
};


export default Layout;

