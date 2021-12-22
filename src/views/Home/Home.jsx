import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const pokemons = useSelector((state) => state.pokemon.value);
  
  return (
    <div>
      <h1>this is home page</h1>
      <div>
        {
          pokemons.map((pokemon) => (
            <p key={pokemon.name}>
              <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Home;
