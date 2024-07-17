import React from 'react'
import {Link} from 'react-router-dom'
import {Logo,Hamburger} from "../assets/index"
import { Avatar } from '@mui/material'

const NavBar = () => {
  return (
   <nav className='bg-[#F4F4F9] items-center fixed top-0 right-0 left-0 px-10 py-5 flex justify-between '>
    <Link to='/'>
      <img src={Logo} className='w-42 h-6 '/>
    </Link>
    <div className='flex md:gap-16 gap-8 items-center'>
    <ul className=' gap-24 hidden md:flex font-medium text-lg text-[#5B5F97]'>
     <li>Favorites</li>
     <li>About us</li>
     <li>Contact us</li>
    </ul>

     <Avatar>T</Avatar>

     <div className=' md:hidden'>
      <img src={Hamburger} className='h-8' />
     </div>
    </div>
    
   </nav>
  )
}

export default NavBar
