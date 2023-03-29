import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../Common.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import samhlogo from '../Media/SAMH.png';
import { samhLink } from './contentLinks';

function Why() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const header = "Around since 1923, SAMH is Scotland’s national mental health charity.";
  const body = "Today, we operate over 70 services in communities across Scotland, providing mental health social care support, addictions and employment services, among others. Together with national programme work in See Me, respectme, suicide prevention, and physical activity and sport, these services inform SAMH’s policy and campaign work to influence positive social change."

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Who are we supporting?</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='center'>
          <Grid item xs={12} sm={8}>
            <Item style={{ minHeight: '250px' }}>
            <a href={samhLink} target="_blank" rel="noopener noreferrer">
                <h1>Scottish Association for Mental Health</h1>
              </a>
              <h3>{header}</h3>
              <p>{body}</p>
              <a href={samhLink} target="_blank" rel="noopener noreferrer" className='highlight'>
                <p>Find out more about SAMH here</p>
              </a>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <a href={samhLink} target="_blank" rel="noopener noreferrer" className='highlight'>
                <img src={samhlogo} alt="SAMH Logo" style={{ width: '100%' }}></img>
              </a>
            </Item>
          </Grid>
        </Grid>
    </>
  )
}

export default Why;
