import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Who() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1>Who?</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={4}>
          <Item style={{height:'250px'}}>Cammy Image</Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>Cammy Description</Item>
        </Grid>
        
        <Grid item xs={12} sm={8}>
          <Item>Pippa Description</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item style={{height:'250px'}}>Pippa Image</Item>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Item style={{height:'250px'}}>Darren Image</Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>Darren Description</Item>
        </Grid>
      </Grid>
    </>
  )
}

export default Who;
