import React from 'react'
import './Loading.css'
import { CircularProgress } from '@mui/material'
function Loading() {
  return (
    <div className='loading'>
      <CircularProgress size={70} disableShrink />
    </div>
  )
}

export default Loading
