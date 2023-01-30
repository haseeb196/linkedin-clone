import { Add } from '@mui/icons-material'
import { Avatar, ButtonBase } from '@mui/material'
import React from 'react'
import './Sidebar2Option.css'

function Sidebar2Option({name, image, text}) {
  return (
    <div className="sidebar2O">
      <div className="sidebar2__Avatar">
         <Avatar src={image}   sx={{ width: 45, height: 45 }}/> 
      </div>
      <div className="sidebar2__info">
        <h3>{name}</h3>
        <p>{text} Lorem Lorem ipsum dolor, sit amet consectetur adipisicing e </p>
        <ButtonBase className='sidebar2__infobtn'>{<Add />}Follow</ButtonBase>
      </div>
    </div>
  )
}

export default Sidebar2Option