import React from 'react';
import './SwipeButtons.css'
import ReplayIcon from  '@mui/icons-material/Replay';
import CloseIcon from  '@mui/icons-material/Close';
import StarRateIcon from  '@mui/icons-material/StarRate';
import FavoriteIcon from  '@mui/icons-material/Favorite';
import FlashOnIcon from  '@mui/icons-material/FlashOn';
import Button from '@mui/material/Button';

function SwipeButtons() {
    return (
      <div className="swipeButtons">
         <Button className="a swipeButtons_repeat">
         <ReplayIcon fontsize="large" />
        </Button>
        <Button className="a swipeButtons_left">
         <CloseIcon fontsize="large" />
        </Button>
        <Button className="a swipeButtons_star">
         <StarRateIcon fontsize="large" />
        </Button>
        <Button className="a swipeButtons_right">
         <FavoriteIcon fontsize="large" />
        </Button>
        <Button className="a swipeButtons_lightening">
         <FlashOnIcon fontsize="large" />
        </Button>

        
  
          
      </div>
    )
  }

  export default SwipeButtons
  