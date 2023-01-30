import { BusinessCenter, Home,  Message, NotificationAdd, PeopleAlt,  Search  } from '@mui/icons-material'
import {  ButtonBase } from '@mui/material'
import React, { useRef} from 'react'
import AccountMenu from './AvatarMain'
import Drawers from './Drawer-for-header'



import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
 
 


  const ref = useRef(null);
  const [{user}, dispatch] = useStateValue();
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className='header' >
      <div className="header__left">
      <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt='' />
     <div className="header__input">
      <Search onClick={handleClick} />
      <input  ref={ref} type="text" placeholder={'Search'}/>
     </div>
      </div>
      <div className="header__right">
     <ButtonBase className='header__rightText' ><Home />Home</ButtonBase>
     <ButtonBase className='header__rightText' ><PeopleAlt />My Network</ButtonBase>
     <ButtonBase className='header__rightText' ><BusinessCenter />Jobs</ButtonBase>
     <ButtonBase className='header__rightText' ><Message />Messaging</ButtonBase>
     <ButtonBase  className='header__rightText' ><NotificationAdd />Notification</ButtonBase>
     <AccountMenu image={user.photoURL} name={user.displayName} /> <Drawers />
     
    
      </div>
    </div>
  )
}

export default Header