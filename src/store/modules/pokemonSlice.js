import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    value: []
  },
  reducers: {
    setPokemons: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
