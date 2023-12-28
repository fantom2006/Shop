import React from "react"
import { BrowserRouter,  Route, Link, Routes } from 'react-router-dom';
import Shop from "./components/main/ShopForYou/Shop";
import Header from "./components/header/header";
import Favorite from "./components/header/Favotite"
import Home from "./HomePage/Home";
import Corzina from "./components/header/Corzina";


function App() {
  return (
    
      <div>
        <header>
         <Link to='/'>Home</Link>
         <Link to='/Shop'>Corzina</Link>
         <Link to='Favorite'>Favorite</Link>

        </header>

        
          <Routes>
            <Route path="/Shop" element={<Corzina/>}/>
            <Route path="/Favorite" element={<Favorite/>}/>
            <Route path="/" element={<Home/>}/>

          </Routes>
        
      </div>
    
  );
}

export default App
