import React from "react";
import logo from "../imgs/logo.jpg"

export default function Header(){
    return(
        <div className="header">
            <img src={logo}/>
            <p>Travel journal</p>
        </div>
    )
}