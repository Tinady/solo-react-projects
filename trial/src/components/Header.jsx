import React from "react";
import logo from "../assets/company_logo.png"

export default function Header(){
  return(
    <nav>
      <div className="logos-container">
       <img src={logo} className="logo"/>
      </div>

      <p>Services and prices</p>
      <button>Sign Up</button>
      <div className="toggle-Container">
        <div  className="toggle-slider"> </div>
        <div className="toggle-circle"></div>
       
      </div>
      


    </nav>
  )
}