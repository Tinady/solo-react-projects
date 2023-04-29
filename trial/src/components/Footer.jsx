import React from "react";

export default  function Footer(props){
 return(
    <div className={props.darkMode?"footer-dark":"footer-container"}>
        <p>FAQ</p>
        <p>Contact us</p>
        <p>random</p>
    </div>
 )
}