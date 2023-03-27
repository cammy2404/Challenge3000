import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

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
          <h1>Challenge3000</h1>

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <h3>Who?</h3>
            <h3>What?</h3>
            <h3>When?</h3>
            <h3>Why?</h3>
            <h3>Social Media</h3>
          </Stack>
        </div>
      </>
    )
  
  }
  
  export default Header;