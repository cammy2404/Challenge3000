import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { isMobile } from 'react-device-detect';
import HeaderMenuList from './HeaderMenuList';
import { Link } from "react-router-dom";
import { mainMenu } from './Content/contentLinks';
import { Grid } from '@mui/material';

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
          <Grid container>
            {mainMenu.map(menuItem => (
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <h3><Link to={menuItem.link}>{menuItem.displayText}</Link></h3>
              </Grid>
            ))}
          </Grid>
        }
      </div>
    </>
  )

}

export default Header;
