import React from 'react'
import Logo from '../assets/images/header-logo.svg'
import Hamburger from '../assets/icons/hamburger.svg'

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10  w-full'>
    <nav className='flex  justify-between items-center max-container'>
      <a href='/'>
       <img src={Logo} width={130} height={29}/>
      </a>

      <ul className='flex-1 flex  justify-center items-center gap-16 max-lg:hidden'>

  </ul>
    </nav>
   </header>
  )
}

export default Nav
