import './Common.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Footer() {

    const style = {
      backgroundColor: "#b8a9c9",
      textAlign: "center",
      width: "80%",
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingBottom: '50px'
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
      <>
        <div style={style}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={3} style={{ textAlign: 'left' }}>
              <h3>Quick Links</h3>
              <h4>About</h4>
              <h4>Who?</h4>
              <h4>What?</h4>
              <h4>When?</h4>
              <h4>Why?</h4>
            </Grid>

            <Grid item xs={12} sm={3} style={{ textAlign: 'left' }}>
              <h3>Other Links</h3>
              <h4>SAMH</h4>
              <h4>ZeoFitness</h4>
              <h4>Donation Page</h4>
              <h4>Instagram Account</h4>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h3>SAMH Logo | Zeo Fitness Logo</h3>
            </Grid>


          </Grid>
        </div>
      </>
    )
  
  }
  
  export default Footer;