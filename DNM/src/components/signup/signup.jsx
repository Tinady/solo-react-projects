import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './signup.css'

export default function Signup(){
    const [user, setUser]=useState({
          Email:'',
          Password: ''
        }
    )
    return(
        <div className='login'>
            <div className='login-container'>
                <div className='close'>
                <Link to='/' className='close-link'>x</Link>
                </div>
              
                 <label>
                    <p>Email </p>
                  <input type='text'/>
                 </label>
                 <label>
                  <p>Password</p> 
                 <input type='text'/>
                 </label>
                 <button>Sign up</button>
                

                  
                 

                <div>
                 Already Have an account
                <Link to='/login'> Login</Link>
                </div>
              
              
                
          </div>       

        </div>

)
}