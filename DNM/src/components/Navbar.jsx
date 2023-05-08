import React from "react";
import "./navbar.css"
import logo from '../assets/logo2.png'
 export default  function Navbar(){
    return(
        <nav >
        <img className="logo" src={logo} alt=""/>
        <div className="search">
           <input type="text" placeholder="search.."/>
           <div className="search-img">
            
           </div>
        </div>
        <div className="links-container">
           
        </div>
        </nav>
    )
 }