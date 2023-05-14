import React from "react";
import './readmore.css'
import { useParams } from "react-router-dom";

export default function ReadMore(props){
    const {id}=useParams();
    const doc=props.items[id]
   
  return(
    <diV className='details'>
    <div className="details-container">
    <img src={doc.img}/> 
    <div>
    <h1>{doc.name}</h1> 
    <p>{doc.when}</p>
    <p>{doc.Hospital}</p> 
     
    </div>
    </div>

    </diV>
    
    )
}