import React from 'react'
import './Empty.css'
import emptyimg from '../../assets/empty.png'
function Empty() {
  return (
    <div className='empty'>
      <img src={emptyimg} alt="empty" />
    </div>
  )
}

export default Empty
