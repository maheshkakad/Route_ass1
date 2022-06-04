import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from "./components/Product";
import NotExits from "./components/NotExits";
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
            <Navbar/>
      
      <Routes>
         <Route path="/" element={  <Home/>}></Route>
         <Route path="/about" element={   <About/>}></Route>
         <Route path="/products" element={<Products/>}></Route>
         <Route path="/products/:id" element={<Product/>}></Route>
         <Route path="/notexits" element={<NotExits/>}></Route>
      </Routes>



    </div>
  );
}

export default App;
