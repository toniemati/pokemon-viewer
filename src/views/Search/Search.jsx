import React, { useState } from 'react';
import './Search.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {
  const pokemons = useSelector((state) => state.pokemon.value);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleInputChange = ({ target: {value} }) => {
    if (!value.length) return setFilteredPokemons([]);

    setFilteredPokemons(pokemons.filter((pokemon) => pokemon.name.match(value)));
  }

  return (
    <div className="search">
      <h1>search for your pokemon</h1>

      <input type="text" onChange={handleInputChange} />

      <div className="search__list">
        {
          (filteredPokemons.length && filteredPokemons.length < 20)
          ? (
            filteredPokemons.map(({ name }) => (
              <div key={name}>
                <Link to={`/details/${name}`}>{name}</Link>
              </div>
            ))
          ) : (
            <div>nothing finded</div>
          )
        }
      </div>
    </div>
  )
}

export default Search;
