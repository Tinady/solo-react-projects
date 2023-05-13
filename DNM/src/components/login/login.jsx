import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './login.css'

export default function Login(){
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
                 <button>Log in</button>
                

                  
                 

                <div>
                 Dont Have an account
                <Link to='/signup'> Sign up</Link>
                </div>
              
              
                
          </div>       

        </div>

)
}