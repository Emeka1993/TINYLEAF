
import Footer from "../layout/Footer.js";
import Header from "./Header";





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

