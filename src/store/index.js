import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './modules/pokemonSlice';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
