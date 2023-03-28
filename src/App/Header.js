import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { isMobile } from 'react-device-detect';
import HeaderMenuList from './HeaderMenuList';
import { Link } from "react-router-dom";

function Header() {

  const style = {
    backgroundColor: "#d6d4e0",
    textAlign: "center",
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px"
  };

  return (
    <>
      <div style={style}>
        <h1><Link to="/Challenge3000/">Challenge3000</Link></h1>

        { isMobile &&
          <HeaderMenuList />
        }

        { !isMobile &&
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <h3><Link to="/Challenge3000/who">Who?</Link></h3>
            <h3><Link to="/Challenge3000/what">What?</Link></h3>
            <h3><Link to="/Challenge3000/when">When?</Link></h3>
            <h3><Link to="/Challenge3000/why">Why?</Link></h3>
            <h3><Link to="/Challenge3000/socialmedia">Social Media</Link></h3>
          </Stack>
        }
      </div>
    </>
  )

}

export default Header;
