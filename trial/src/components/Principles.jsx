import React from "react";
import mission from "../assets/mission.avif"
import vision from "../assets/vision.avif"
import values from "../assets/values.avif"


export default function Principles(props){
    return(
        <div className={props.darkMode?"principles-dark":"principles-container"}>
            <div className="principles-detail">
             <img src={mission} className="principles-img"/>
             <div><h1>Missions</h1>
              <ul>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
              </ul>
              </div>
            </div>
            <br/>
            <div className="principles2-detail">
             <div><h1>Vision</h1>
              <ul>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
              </ul>
              </div>
              <img src={vision} className="principles2-img"/>
            </div>
            <br/>
            <div className="principles-detail">
             <img src={values} className="principles-img"/>
             <div><h1>Values</h1>
              <ul>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
                 <li>Be specific Avoid general statements that are not unique to your company.</li>
              </ul>
              </div>
            </div>
            <br/>
            
        </div>
    )
}