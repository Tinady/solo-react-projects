import React from "react";
import Button from "./Button";
import {arrowRight} from '../assets/icons/index'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 max-container flex flex-col  justify-center min-h-screen  xl:flex-row  border-red-500"
      
    >
      <div className="relative  flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28">
       <p> Our summer collections </p>
       <h1>
        The New  Arrival
        <br className="bg-red-500   "/>
        <span>Nike</span>
       </h1>
       <p>Discover stylsish Nike arrivals, quality comfort an innovation fro your active  life.</p>
     
      </div>
      <Button iconLabel='Click me'  iconsURL={arrowRight}/>

    </section>
  );
};

export default Hero;
