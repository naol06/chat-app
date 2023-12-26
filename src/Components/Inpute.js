import React from 'react'
import Img from '../Image/img.png'
import Attach from '../Image/attach.png'
function Inpute() {
  return (
    <div className='inpute'>
    <input type='text' placeholder='Type something...'/>
    <div className='send'>
    <img src={Attach} alt=''/>
    <input type='file' style={{display:"none"}} id='file'/>
    <label htmlFor='file'>
  <img src={Img} alt=''/>
  </label>
  <button>Send</button> 
    </div>
    </div>
  )
}

export default Inpute