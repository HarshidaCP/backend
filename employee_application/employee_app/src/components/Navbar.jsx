import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
      <AppBar >
        <Toolbar>
          <Typography align='left' variant="h6" component="div" sx={{flexGrow:0}}> Employee App</Typography>&nbsp;
          <Link to='/'>
            <Button varient='contained' color='secondary'>Add</Button>
          </Link>  &nbsp;
          <Link to='/v'>
            <Button varient='contained' color='secondary'>View</Button>
          </Link>  &nbsp;
        </Toolbar>
      </AppBar>
      <br/><br/>
    </div>
  )
}

export default navbar