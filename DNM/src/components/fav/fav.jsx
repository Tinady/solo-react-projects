import React from "react";
import { Link } from "react-router-dom";

export default function Fav(props){
  return (
    <div>
      {props.items.fav&&<div className="card-container">
          <div>
         <button className="fav-btn"  
          onClick={props.handleclick}>
          unfav
         </button>
      <img src={props.items.img} alt=""/>
       <p>Dr. {props.items.name}</p>
        <p>Works in: {props.items.Hospital}</p>
        <p>hours:{props.items.when}</p>
        <p>{props.items.specialization}</p>
        <Link to={`./${props.items.id}`}>
        <button>Read more</button>
        </Link>
        </div>
        </div>}
    </div>
  )
}