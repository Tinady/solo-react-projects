import React from "react";
import background from "../imgs/background1.avif"

export default function Quote()
{
    return(
        <div className="quote-container">
            <img className="quote-img" src={background}/>
            <div className="garden-quote">
            <p className="quote-text"><q>A garden is not just a place.
                 It is also a journey.</q></p>
                 </div>
               </div>
    )
}