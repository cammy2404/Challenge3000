import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import pushupIcon from '../Media/pushup02.png';

function What() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1 style={{textAlign: 'center'}}>The Challenge</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={8}>
          <Item>Challenge Description</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <img src={pushupIcon} alt="Man doing a push up" style={{ width: '100%' }}></img>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default What;
