import React from 'react';
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
pokedexContainer: {
  paddingTop: '20px',
  paddingLeft: '50px',
  paddingRight: '50px',
},
})

const getPokemonCard = () => {
  return(
  <Grid item xs={12} sm={4}>
    <Card>
      <CardContent>Hey</CardContent>
    </Card>
  </Grid>
  )}

const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
    <AppBar position='static'>
      <Toolbar/>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {getPokemonCard()}
      </Grid>
    </AppBar>
    </>
  )
}

export default Pokedex
