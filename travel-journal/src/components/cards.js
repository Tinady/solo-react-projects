import React from "react";
import icon from "../imgs/location-icon.png"

export default function cards(props)
{
    return(
        <div className="card-container">
            <div className="img-container"> 
            <img src={props.data.image}/>
            </div>
            <div className="information-container">
              <img src={icon}/>
              <p>{props.data.country}</p>
              <a href="google.com">View on google Maps</a>
            </div>
             <h1>{props.data.location}</h1>
             <p>{props.data.date}</p>
             <p>{props.data.description}</p>

        </div>
    )
}