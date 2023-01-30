
import { Add, Bookmark, PersonAdd } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
 
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <div className="sidebar__topAvatar">
          <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" alt="" />
           <Avatar  sx={{height : 50, width: 50}}/>
        <h2>Welcome, Name!</h2>
         <button>Add a photo</button>
         
         
        </div>
        <div className="sidebar__topMain">
        <div className="sidebar__topgroup1">
        
         <div className="sidebar__topgroup1A">
         <p className='ptag'>Connections</p>
         <p>Grow your network</p>
         </div>
         <div className="sidebar__topgroup1B">
       <IconButton><PersonAdd /></IconButton> 
         </div>
       
        </div>
       <div className="sidebar__topgroup2">
         <p>Access exclusive tools & insights</p>
         <a href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_homepage_identity_upsell&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BuVEec0N5QnKBWEcw0k9Dzw%3D%3D">Try Premium for free</a>
       </div>
       <div className="sidebar__topgroup3">
       <Bookmark /> <span>My items</span> 
       </div>
        </div>
      </div>
      <div className="sidebar__bottom">
       <div className="links">
         <ul>
            <li><a href="https://www.linkedin.com/groups?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIyL0TbpWQfqSaJHbklOKNQ%3D%3D">Groups</a></li>
            <li className='events'><a href="https://www.linkedin.com/events/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIyL0TbpWQfqSaJHbklOKNQ%3D%3D">Events</a> <IconButton><Add /></IconButton></li>
            <li><a href="https://www.linkedin.com/feed/following?filterType=channel&focused=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIyL0TbpWQfqSaJHbklOKNQ%3D%3D">Followed Hastags</a></li>
         </ul>
       </div>
       <div className="discover">
       <h4>Discover more</h4>
       </div>
      </div>
    
      
      
      
    </div>
  )
}

export default Sidebar