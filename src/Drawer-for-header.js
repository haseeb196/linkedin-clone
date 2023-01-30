import * as React from 'react';
import './Drawer-for-header.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import WorkIcon from '@mui/icons-material/Work';
import { Add, AddBusiness, Apps, Close, ControlCamera, Group, Insights, Leaderboard, MoreHoriz, Payments, SmartDisplay} from '@mui/icons-material';
import { ButtonBase, IconButton, useMediaQuery } from '@mui/material';

export default function Drawers() {
  const matches = useMediaQuery('(max-width:519px)');
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
  
   <Box
      sx={{ width: 390 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div className='title'>
    <h2>Work</h2>
    <IconButton onClick={toggleDrawer(anchor, false)}><Close /></IconButton> 
    </div>
    <div className="main">
  <div className="first__element">
  <div className="first__elementTop">
    <h2>Vist More LinkedIn Products</h2>
    </div>
  <div className="first__elementBottom">
  
  <ButtonBase onClick={toggleDrawer(anchor, false)} className='icons'><SmartDisplay className='icon'/><span>Learning</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><Insights className='icon'/> <span>Insights</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><WorkIcon className='icon'/><span>Post a job</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><ControlCamera className='icon'/> <span>Advertise</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><Leaderboard className='icon'/>  <span>Find Leads</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><Group className='icon' /> <span>Groups</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><AddBusiness className='icon'/> <span>Services</span></ButtonBase>
  <ButtonBase onClick={toggleDrawer(anchor, false)} className="icons"><Payments  className='icon'/> <span>Salary</span></ButtonBase>
  </div>
  
  </div>
  <div className="last__element">
  <div className="last__elementTop">
    <h2>LinkedIn Business Services</h2>
    </div>
    <div className="last__elementMid">
    <ul>
       <li> <a href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control&src=li-nav" target='_blank' rel='noreferrer'><h3>Talent Solutions</h3> <p>Find, attract and recruit talent</p></a>  </li>
       <li ><a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-header-dropdown-lss-control&src=li-nav" target='_blank' rel='noreferrer'><h3>Sales Solutions</h3> <p>Unlock sales opportunities</p></a></li>
       <li ><a href="https://www.linkedin.com/talent/post-a-job?trk=nav_biz_serv_job_post_nept&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BovIZz1xGTfeSpUf4USUGKw%3D%3D" target='_blank' rel='noreferrer'><h3>Post a job for free</h3><p>Get your job in front of quality candidates</p></a></li>
       <li ><a href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav"  target='_blank' rel='noreferrer'><h3>Marketing Solutions</h3><p>Acquire customers and grow your business</p></a></li>
       <li ><a href="https://learning.linkedin.com/?trk=d_flagship3_nav&veh=learning_solutions&src=li-nav"  target='_blank' rel='noreferrer'><h3>Learning Solutions</h3><p>Develop talent across your organization</p></a></li>
      </ul>
    </div>
    <div className="last__elementBottom">
    <ul><li>
     <a href="https://www.linkedin.com/company/setup/new/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BovIZz1xGTfeSpUf4USUGKw%3D%3D"><h3>Create a Company Page</h3><span><Add /></span></a>
     
    </li></ul>
    </div>
  </div>
  </div>

    </Box>
  
    
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonBase onClick={toggleDrawer(anchor, true)}>{ matches ? (<MoreHoriz />) : ( <Apps /> ) }</ButtonBase>
          <Drawer
          
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}