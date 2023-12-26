import React from 'react'

function Login() {
  return (
    <div className='container'>
    <div className='form_container'>
    <span className='logo'>Naol Chat</span>
    <span className='title'>Login</span>
    <form>
    <input type='email' placeholder='Enter Your Email'/>
    <input type='password' placeholder='Enter Your Password'/>
   
    <button>Login</button>
    </form>
    <p>You don't have an account?<a>Register</a></p>
    </div>
    </div>
  )
}

export default Login