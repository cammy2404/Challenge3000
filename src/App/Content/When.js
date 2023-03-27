import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
      <h1>When?</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={4}>
          <CalendarMonthIcon sx={{ fontSize: 100, color: '#5b9aa0' }} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>Every day in April</Item>
        </Grid>
      </Grid>
    </>
  )
}

export default When;
