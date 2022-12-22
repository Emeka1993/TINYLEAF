
import './Global.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Reservation from "./Pages/Reservation"
import Layout from './layout/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Layout />
      <Routes >
       <Route path="/home" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/reservation" element={<Reservation />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
