import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './modules/pokemonsSlice';
import typesReducer from './modules/typesSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
    types: typesReducer
  },
});
