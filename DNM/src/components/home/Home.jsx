import React from "react";
import "./home.css";

export default function Home(props){
    return(
        <div className="card-container">
         <img src={props.items.img} alt=""/>
        <p>Dr. {props.items.name}</p>
        <p>Works in: {props.items.Hospital}</p>
        <p>hours:{props.items.when}</p>
        <p>{props.items.specialization}</p>
        <p></p>
      </div>
    )
    
}