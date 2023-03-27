import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Why() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1>Why?</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={8}>
            <Item>Short Description of SAMH and link to their website</Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item style={{height:'250px'}}>SAMH Logo</Item>
          </Grid>
        </Grid>
    </>
  )
}

export default Why;
