import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { toFirstCharUppercase } from "./constants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  pokemonContainer: {
    paddingTop: "20px",
    paddingLeft: "500px",
    paddingRight: "50px",
    backgroundColor: "white",
    borderRadius: "50%",
  },
  button: {
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "center",
    marginRight: "50px",
  },
  title: {
    marginLeft: "20px",
  }
  
}))


const Pokemon = (props) => {
  const classes = useStyles();
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
    const { front_default } = sprites;
    
    return (
      <>
      <Container>
      <Grid className={classes.pokemonContainer}>
        <Typography className={classes.title} variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
        </Grid>
        </Container>
      </>
    );
  };
  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button className={classes.button} variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
};
export default Pokemon;