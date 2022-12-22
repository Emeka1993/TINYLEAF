import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    
  
    <>
    {/* //header */}
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

    
      <footer>
        Footer
      </footer>
      <Outlet />
    </>
  )
};

export default Layout;