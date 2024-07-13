import React from 'react'
import Logo from '../assets/images/header-logo.svg'
import Hamburger from '../assets/icons/hamburger.svg'
import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10  w-full'>
    <nav className='flex  justify-between items-center max-container'>
      <a href='/'>
       <img src={Logo} width={130} height={29}/>
      </a>

      <ul className='flex-1 flex  justify-center items-center gap-16 max-lg:hidden'>
    { navLinks.map((item) => (
      <li key={item.label}>
<a href={item.href} className='font-montserrat leading-normal text-lg text-slate-700'>{item.label}</a>
      </li>
    )) }
  </ul>
   <div className='hidden max-lg:block'>
   <img src={hamburger} className='h-6 w-9  '/>
   </div>
 
    </nav>
   </header>
  )
}

export default Nav
