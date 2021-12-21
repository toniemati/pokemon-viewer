import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const pokemons = useSelector((state) => state.pokemon.value);

  console.log(pokemons);

  return (
    <div>
      <h1>this is home page</h1>
      <div>
        {
          pokemons.map((pokemon) => (
            <div>{pokemon.name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;
