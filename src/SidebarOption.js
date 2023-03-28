import React from 'react'
import "./SidebarOption.css";
// we will pass icon as argument

const SidebarOption = ({active,text,Icon}) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon className='icons' />
        <h2>{text} </h2>
      
    </div>
  )
}

export default SidebarOption
