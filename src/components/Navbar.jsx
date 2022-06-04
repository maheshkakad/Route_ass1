import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   return<div style={{display:"flex" , gap:"20px" , justifyContent:"center"}}>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/products">products</Link>
      

    </div>
}

export default Navbar;