import { createSlice } from "@reduxjs/toolkit";

export const typesSlice = createSlice({
  name: 'types',
  initialState: {
    value: []
  },
  reducers: {
    setTypes: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { setTypes } = typesSlice.actions;

export default typesSlice.reducer;
