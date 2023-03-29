import * as React from 'react';
import Grid from '@mui/material/Grid';
import donateLogo from './Media/charityIcon.png';
import Button from '@mui/material/Button';
import { justGivingLink } from './Content/contentLinks';

function DonateNow() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <img src={donateLogo} alt="Ring with hands in it passing a coin" style={{width:'100%'}}></img>
          <p style={{fontSize:8}}>Made by Richard Slade and Angus Raharjo for Noun Project</p>
        </Grid>

        <Grid item xs={12} sm={8} style={{textAlign: "center"}}>
          <h1>Donate now to support us!</h1>
          <h2>All donations will be going to SAMH</h2>
          <Button 
            variant="contained" 
            style={{backgroundColor: '#5b9aa0'}}
            href={justGivingLink}
            target="_blank"
            >
              DONATE NOW
          </Button>
        </Grid>

      </Grid>
    </>
  )
}

export default DonateNow;
