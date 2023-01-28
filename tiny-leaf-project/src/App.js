import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Reservation from "./Pages/Reservation";
import Layout from './layout/Layout';
import Home from '../src/Pages/Home';
import Menu from '../src/Pages/Menu'





function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Layout>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
        </Routes>
      </Layout>
      </BrowserRouter>
      <div>
    </div>
    </div>
    
  );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



export default App;



