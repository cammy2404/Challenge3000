import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import calendarImage from '../Media/calendar.png';

function When() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Dates</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='center'>
        <Grid item xs={12} sm={4}>
          <img src={calendarImage} alt="Calendar" style={{width:'100%'}}></img>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>
            <h2>This challenge will take place for the entire month of April 2023</h2>
            <h3>Start Date - 01/04/2023</h3>
            <h3>End Date - 30/04/2023</h3>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default When;
