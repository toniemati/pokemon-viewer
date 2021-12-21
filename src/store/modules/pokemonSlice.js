import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    value: []
  },
  reducers: {
    setPokemons: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
