import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Details = () => {
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokemon.value);
  const [pokemon, setPokemon] = useState(null);

  const getPokemonInfo = async () => {
    if (!pokemons.length) return;

    const { url } = pokemons.find((pokemon) => pokemon.name === name);
    const { data } = await axios.get(url);
    setPokemon(data);
  }

  useEffect(() => {
    getPokemonInfo();
  }, [pokemons]);

  return (
    <div className="details">    
      <div className="details__image">
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name + ' image'} />
      </div>

      <div className="details__info">
        <div className="details__infoColumn">
          <div className="details__infoColumn--title">Name:</div>
          <div className="details__infoColumn--content">{pokemon?.name}</div>
        </div>

        <div className="details__infoColumn">
          <div className="details__infoColumn--title">Height:</div>
          <div className="details__infoColumn--content">{pokemon?.height}</div>
        </div>

        <div className="details__infoColumn">
          <div className="details__infoColumn--title">Weight:</div>
          <div className="details__infoColumn--content">{pokemon?.weight}</div>
        </div>

        <div className="details__infoColumn">
          <div className="details__infoColumn--title">Abilities:</div>
          {
            pokemon?.abilities.map(({ ability: { name } }) => (
              <div className="details__infoColumn--content" key={name}>
                {name}
              </div>
            ))
          }
        </div>

        <div className="details__infoColumn">
          <div className="details__infoColumn--title">Types:</div>
          {
            pokemon?.types.map(({ type: { name } }) => (
              <div className="details__infoColumn--content" key={name}>
                {name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Details;
