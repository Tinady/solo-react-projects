import React from "react"
import logo from  "../imgs/logo.png"
import hamburger from "../imgs/hamburger.jpg"


export default  function Navbar()
{
   return( 
   <div className="navbar">
        <div className="logo-container" >
            <img className="logo" src={logo}/>
            <p className="logo-text">Botanic garden</p>
        </div>
        
        <div className="navbar-buttons">
        <button className="btn">Visit </button> 
        <button className="btn">Donate</button>
     
        </div>
        
       

    </div>
   )


}


