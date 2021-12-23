import React, { useEffect, useState } from 'react';
import './Search.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const pokemons = useSelector((state) => state.pokemons.value);
  const types = useSelector((state) => state.types.value);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [typesInfo, setTypesInfo] = useState([]);

  const handleSelectChange = ({ target: { value } }) => {
    const { pokemon } = typesInfo.find(({ name }) => name === value);
    const list = pokemon.map(({ pokemon }) => pokemon);
    setFilteredPokemons(list);
  };

  const handleInputChange = ({ target: { value } }) => {
    if (!value.length) return setFilteredPokemons([]);

    setFilteredPokemons(pokemons.filter((pokemon) => pokemon.name.match(value)));
  }

  useEffect(() => {
    const getTypesInfo = () => {
      setTypesInfo([]);

      types.forEach(async ({ url }) => {
        const { data } = await axios.get(url);
        setTypesInfo((prev) => [...prev, data]);
      });
    }

    types.length && getTypesInfo();

  }, [types]);

  return (
    <div className="search">
      <h1>search for your pokemon</h1>

      {
        typesInfo.length ? (
          <select onChange={handleSelectChange} defaultValue={'default'}>
            <option disabled value="default">search by type</option>
            {
              typesInfo.map(({ id, name }) => (
                <option value={name} key={name}>{name}</option>
              ))
            }
          </select>
        ) : (
          <></>
        )
      }

      <input type="text" onChange={handleInputChange} placeholder="search by name" />

      <div className="search__list">
        {
          (filteredPokemons.length)
          ? (
            filteredPokemons.map(({ name }) => (
              <div className="search__listItem" key={name}>
                <Link to={`/details/${name}`}>{name}</Link>
              </div>
            ))
          ) : (
            <></>
          )
        }
      </div>
    </div>
  )
}

export default Search;
