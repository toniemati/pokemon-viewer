import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
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

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
