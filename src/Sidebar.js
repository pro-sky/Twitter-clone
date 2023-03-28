import React from 'react'
import './Sidebar.css';
import {AiOutlineTwitter,AiFillHome,AiOutlineSearch} from 'react-icons/ai';
import {MdOutlineNotifications} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi'
import  {BsBookmark} from 'react-icons/bs'
import  {CgList} from 'react-icons/cg'
import  {MdOutlinePersonOutline,MdMoreHoriz} from 'react-icons/md'

import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* twitter icon */}
        <AiOutlineTwitter  className='sidebar_twittericon'/>

        {/* sidebaroption */}
         < SidebarOption active Icon={AiFillHome}  text="Home" />
         < SidebarOption  Icon={AiOutlineSearch} text="Explore" />
         < SidebarOption Icon={MdOutlineNotifications} text="Notifications" />
         < SidebarOption Icon={HiOutlineMail}  text="Message" />
         < SidebarOption  Icon={BsBookmark} text="Bookmarks" />
         < SidebarOption Icon={CgList} text="List" />
         < SidebarOption Icon={MdOutlinePersonOutline} text="Profile" />
         < SidebarOption Icon={MdMoreHoriz} text="More" />

         {/* button */}
         <button variant='outlined' className='sidebar__tweet' >Tweet</button>
         
       
      
    </div>
  )
}

export default Sidebar
