import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function HeaderMenuList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          
        }}
      >
        <Link to="/Challenge3000/who"><MenuItem onClick={handleClose}>Who?</MenuItem></Link>
        <Link to="/Challenge3000/what"><MenuItem onClick={handleClose}>What?</MenuItem></Link>
        <Link to="/Challenge3000/when"><MenuItem onClick={handleClose}>When?</MenuItem></Link>
        <Link to="/Challenge3000/why"><MenuItem onClick={handleClose}>Why?</MenuItem></Link>
        <Link to="/Challenge3000/socialmedia"><MenuItem onClick={handleClose}>Social Media</MenuItem></Link>
      </Menu>
    </div>
  );
}

export default HeaderMenuList;
