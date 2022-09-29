import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import ForumIcon from   '@mui/icons-material/Forum';


function Header() {
  return (
    <div className="header">
        <Button>
         <PersonIcon fontsize="large"  className="header_icon"/>
        </Button>

        <img 
        className='header_logo'
        src='https://th.bing.com/th/id/OIP.K7b6qivwsHBFPaPZAFCF_AHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7'
        alt=''
        />


        <Button>
         <ForumIcon />
        </Button>

        
    </div>
  )
}

export default Header