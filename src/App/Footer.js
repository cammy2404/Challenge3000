import './Common.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import samhlogo from './Media/SAMH.png';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

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
              <h4><Link to="/Challenge3000/who">Who?</Link></h4>
              <h4><Link to="/Challenge3000/what">What?</Link></h4>
              <h4><Link to="/Challenge3000/when">When?</Link></h4>
              <h4><Link to="/Challenge3000/why">Why?</Link></h4>
              <h4><Link to="/Challenge3000/socialmedia">Social Media</Link></h4>
            </Grid>

            <Grid item xs={12} sm={3} style={{ textAlign: 'left' }}>
              <h3>Other Links</h3>
              <a href='https://www.samh.org.uk/' target="_blank" rel="noopener noreferrer">
                <h4>SAMH</h4>
              </a>
              {/* <h4>ZeoFitness</h4> */}
              <a href='https://www.justgiving.com/page/cameron-mcneill-challenge3000' target="_blank" rel="noopener noreferrer">
                <h4>Donation Page</h4>
              </a>
              <a href='https://www.instagram.com/candpatthegym/' target="_blank" rel="noopener noreferrer">
                <h4>Instagram Account</h4>
              </a>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={10}
                paddingTop={5}
              >
                <img src={samhlogo} alt='SAMH Logo' style={{ width: '25%' }} ></img>
                {/* <img src={samhlogo} alt='SAMH Logo' style={{ width: '25%' }} ></img> */}
              </Stack>
            </Grid>


          </Grid>
        </div>
      </>
    )
  
  }
  
  export default Footer;