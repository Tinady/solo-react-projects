import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"
import logo from '../assets/logo2.png'
import search from '../assets/search.png'
 export default  function Navbar(){
    return(
        <nav >
        <img className="logo" src={logo} alt=""/>
        <div className="search">
           <input type="text" placeholder="search.."/>
           <div className="search-img-container">
             <img className="search-img" src={search} alt=""/>
           </div>
        </div>
        <div className="links-container">
            <Link to='/' className='links'>Home</Link>
            <Link to='/' className='links'>About us</Link>
            <Link to='/' className='links'>contact us</Link>
            <Link to='/' className='links'>Log in</Link>
        </div>
        </nav>
    )
 }