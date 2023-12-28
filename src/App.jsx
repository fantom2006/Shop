import React from "react"
import { BrowserRouter,  Route, Link, Routes } from 'react-router-dom';
import Shop from "./components/main/ShopForYou/Shop";
import Header from "./components/header/header";
import Favorite from "./components/header/Favotite"
import Home from "./HomePage/Home";
import Corzina from "./components/header/Corzina";
import Footer from "./components/footer/Footer/Footer"


function App() {
  return (
    
      <div>
        <Header/>
<Footer/>
        
          
      </div>
    
  );
}

export default App
