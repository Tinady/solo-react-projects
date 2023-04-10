import React from "react";
import icon from "../imgs/location-icon.png"

export default function cards(props)
{
    return(
        <div className="card-container">
            <div className="img-container"> 
            <img src={props.data.image}/>
            </div>
            <div className="info">
            <div className="information-container">
              <img src={icon}/>
              <p>{props.data.country}</p>
              <a href="googlemap.com">View on google Maps</a>
            </div>


             <h1 className="location-container">{props.data.location}</h1>
             <p className="date-container">{props.data.date}</p>
             <p className="description-container">{props.data.description}</p>
             </div>
        </div>
    )
}