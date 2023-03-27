import * as React from 'react';
import Grid from '@mui/material/Grid';

function DonateNow() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={7}>
          <h3>Big donate now image that looks cool</h3>
        </Grid>

        <Grid item xs={12} sm={5}>
          <h3>Donate to SAMH</h3>
          <h4>You should do this because its a good thing</h4>
        </Grid>

      </Grid>
    </>
  )
}

export default DonateNow;
