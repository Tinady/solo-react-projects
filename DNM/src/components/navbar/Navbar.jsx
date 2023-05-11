import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"
import { useEffect, useState } from 'react'
import logo from '../../assets/logo2.png'
import search from '../../assets/search.png'
import menu from '../../assets/menu.png'
 export default  function Navbar(){

  const [windowWidth, setWindowWidth]=useState(window.innerWidth)
  function handle(){
      setWindowWidth(window.innerWidth)
}
  console.log(windowWidth)
  useEffect(()=>
    { window.addEventListener('resize', handle)},
     [windowWidth]
    )

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
         {windowWidth >800 ? <> <Link to='/' className="links">Home</Link>
             <Link to='/login' className="links">Log in</Link>
             <Link to='/articles' className="links">Articles</Link></>:
             <button className="menu-btn">
              <img className="menu-img" src={menu} alt=''/>
              </button>}
            

        </div>
      </nav>
    )
 }