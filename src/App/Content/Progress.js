import Grid from '@mui/material/Grid';
import { challengeStats } from './contentObjects';

function Progress() {
  return (
    <Grid container textAlign="center">
      {challengeStats.map(person => (
        <Grid item xs={12} sm={12 / challengeStats.length}>
          <h1>{person.name}</h1>
          <h3>Daily Pushups: {person.daily}</h3>
          <h3>Challenge Total: {person.daily * 30}</h3>
          <h3>Progress: {person.completed}/{person.daily * 30}</h3> 
          <h3>{(person.completed / (person.daily * 30)) * 100}%</h3>
        </Grid>
      ))}
    </Grid>
  )
}

export default Progress;