import { ArrowForward, Close, Info } from '@mui/icons-material'
import { ClickAwayListener, IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import './Sidebar2.css'
import Sidebar2Option from './Sidebar2Option';

function Sidebar2() {

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="sidebar2">
      <div className="main__sidebar">
        <div className="top__section">
        <h2>Add to your feed</h2>
        <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
               className='tooltip'
                disableHoverListener
                disableTouchListener
                placement='left-start'
                title={<div className='info'><div className='info1'><p>Follow things that interest you to personalize your feed.<a href="https://www.linkedin.com/help/linkedin/answer/32504?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBtjrOxMzRZOBcfpMM6%2FjPA%3D%3D">Learn more.</a></p></div> <div className='info2'><IconButton   onClick={handleTooltipClose}><Close /></IconButton></div></div>   }
              >
                <IconButton className='infobtn' onClick={handleTooltipOpen}><Info /></IconButton>
              </Tooltip>
              </ClickAwayListener>
        </div>

        <div className="mid__section">
         <Sidebar2Option name={"Elon Musk"} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg'} text={'rocket science'}/> 
         <Sidebar2Option name={'Bill Gates'} image={'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop'} text={'education % blah blah'} /> 
         <Sidebar2Option name={'Mark'}  image={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/482px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'} text={'We Don\'t Build Services ervices.'} /> 
        </div>
        <div className="bottom__section">
           <a href="https://www.linkedin.com/mynetwork/discover-hub/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBtjrOxMzRZOBcfpMM6%2FjPA%3D%3D">View all recommendations<ArrowForward /></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar2