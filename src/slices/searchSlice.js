import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: 'shark',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searching(state, data) {
      state.search = data.payload;
    },
  },
});

export const { searching } = searchSlice.actions;

export default searchSlice.reducer;
