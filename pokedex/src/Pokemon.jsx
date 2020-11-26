import React from 'react'

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = match;
  return (
    <div>
      `#${pokemonId} stats`
    </div>
  )
}

export default Pokemon
