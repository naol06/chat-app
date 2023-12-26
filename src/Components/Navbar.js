import React from 'react'

function Navbar() {
  return (
    <div className='nv_bar'>
    <span className="logo">Naol Chat</span>
    <div className='user'>
    <img src={`https://th.bing.com/th/id/OIP.ASUCzlHkK7moMHVCYLyyxAHaFc?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`}
     alt=''/>
    <span >Naol</span>
    <button>Logout</button>
    </div>
    </div>
  )
}

export default Navbar