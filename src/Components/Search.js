import React from 'react'

function Search() {
  return (
    <div className='search'>
    <div className='searchForm'>
    <input type='text' placeholder='Fined a user'/>
    </div>
    <div className='userChat'>
    <img 
    src={`https://th.bing.com/th/id/OIP.ASUCzlHkK7moMHVCYLyyxAHaFc?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`}
    alt=''
    />
    <div className='userchatinfo'>
    <span>Naol</span>
    </div>
    </div>
    </div>
  )
}

export default Search