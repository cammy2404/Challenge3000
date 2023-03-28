import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { isMobile } from 'react-device-detect';
import { cammy, pippa } from './contentObjects';
import PippaGymPhoto from '../Media/PippaGymPhoto.jpg'
import CammyGymPhoto from '../Media/CammyGymPhoto.jpg'

function Who() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  if ( isMobile ) {
    // MOBILE VIEW
    return (
      <>
        <h1>Who?</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={4}>
            <Item style={{height:'250px'}}>
              <img src={CammyGymPhoto} alt="Cammy gym photo" style={{ height: '250px'}} ></img>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Item style={{ textAlign: 'left' }}>
              {getDescription(cammy)}
            </Item>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Item style={{height:'250px'}}>
              <img src={PippaGymPhoto} alt="Pippa gym photo" style={{ height: '250px'}} ></img>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Item style={{ textAlign: 'left' }}>
              {getDescription(pippa)}
            </Item>
          </Grid>
        </Grid>
      </>
    )
  } else {
    // DESKTOP VIEW
    return (
      <>
        <h1>Who?</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={4}>
            <Item style={{height:'250px'}}>
              <img src={CammyGymPhoto} alt="Cammy gym photo" style={{ height: '250px'}} ></img>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Item style={{ textAlign: 'left', minHeight: '250px' }}>
              {getDescription(cammy)}
            </Item>
          </Grid>
          
          <Grid item xs={12} sm={8}>
            <Item style={{ textAlign: 'left', minHeight: '250px' }}>
              {getDescription(pippa)}
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item style={{height:'250px'}}>
              <img src={PippaGymPhoto} alt="Pippa gym photo" style={{ height: '250px'}} ></img>
            </Item>
          </Grid>
        </Grid>
      </>
    )
  }
}

function getDescription(person) {
  return (
    <>
      <h2>Name: {person.name}</h2>
      <h3>Job: {person.job} at {person.company}</h3>
      <p>{person.description}</p>
    </>
  )
}

export default Who;
