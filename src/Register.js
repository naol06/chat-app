import React from 'react'

function Register() {
  return (
    <div className='container'>
    <div className='form_container'>
    <span className='logo'>Naol Chat</span>
    <span className='title'>Register</span>
    <form>
    <input type='text' placeholder='Enter Your Name'/>
    <input type='email' placeholder='Enter Your Email'/>
    <input type='password' placeholder='Enter Your Password'/>
    <input type='file'/>
    <button>Sign up</button>
    </form>
    <p>You do have an account?<a>login</a></p>
    </div>
    </div>
  )
}

export default Register