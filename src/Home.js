import React from 'react'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'

function Home() {
  return (
    <div className='Home'>
    <div className='container_home'>
    <Sidebar/>
    <Chat/>
    
    </div>
    </div>
  )
}

export default Home