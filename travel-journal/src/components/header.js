import React from "react";
import logo from "../imgs/logo.png"

export default function Header(){
    return(
        <div className="header">
           <div className="journal">
             <img src={logo}/>
             <p>Travel journal</p>
         </div> 
           
        </div>
    )
}