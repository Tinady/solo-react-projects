import React from 'react'
import { Hero1 } from "../assets"

const Hero = () => {
  return (
    <section className='bg-cover mt-20 h-[89vh] flex items-center justify-center flex-col gap-10' style={{ backgroundImage: `url(${Hero1})` }}>
      
        <input className='w-10/12 h-12 rounded-xl px-8 focus:ring-0' type='text' placeholder='Search here ....' />
        <h2 className='text-xl md:text-3xl text-[#5B5F97] font-bold' >We thrive to make staying healthy easier</h2>
        
        
   
    </section>
  )
}

export default Hero
