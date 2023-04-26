import React from "react";
import logo from "../assets/company_logo.png"
import icon from "../assets/dropdown.png"

export default function Header(props){
  return(
    <nav className={props.darkMode?'dark':''}>  
      <div className="logos-container">
       <img src={logo} className="logo"/>
       <p>Company name</p>
      </div>

      <div className="link-container">

      <a href="">Services and prices 
      <div><img className="dropdown"src={icon}/>
      </div> </a>
      <a href="">Sign Up</a>
      <div className="toggle-Container" onClick={props.handleClick}>
        <div  className="toggle-slider" >
           <div className="toggle-circle"></div>
         </div>
       
       
      </div>
      </div>
      


    </nav>
  )
}