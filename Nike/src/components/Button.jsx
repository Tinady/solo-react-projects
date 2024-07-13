import React from 'react'

const Button = (props) => {
  return (
   <button className=''>
    {props.iconLabel}
    {props.iconsURL}
   </button>
  )
}

export default Button
