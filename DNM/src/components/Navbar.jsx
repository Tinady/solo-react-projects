import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"
import logo from '../assets/logo2.png'
import search from '../assets/search.png'
 export default  function Navbar(){
    return(
      <nav className="header">
        <div className="left-section">
          <img src={logo} className="Logo"/>
        </div>
        <div className="middle-section">
        <input type="text" placeholder="Search..." 
            className="search-bar"/>
        <button className="search-button">
           <img src={search} alt="" className="search-img"/>
        </button>

        </div>
        <div className="right-section">
         <Link to='/' className="links">Home</Link>
         <Link to='/login' className="links">Log in</Link>
         <Link to='/articles' className="links">Articles</Link>

        </div>
      </nav>
    )
 }