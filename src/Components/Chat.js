import React from 'react'
import Cam from "../Image/cam.png";
import Add from "../Image/add.png";
import More from "../Image/more.png"
import Messages from './Messages';
import Inpute from './Inpute';
function Chat() {
  return (
    <div className='chat'>
    <div className='chatInfo'>
    <span>Naol</span>
    <div className='chatIcons'>
    <img src={Cam} alt=''/>
    <img src={Add} alt=''/>
    <img src={More} alt=''/>
    </div>
    </div>
    <Messages/>
    <Inpute/>
    </div>
  )
}

export default Chat