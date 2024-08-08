import { createSlice } from '@reduxjs/toolkit';
import { getCamperList } from './operations';

const camperSlice = createSlice({
  name: 'campers',
  initialState: { campers: [], favorites: [] },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    deleteFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload,
      );
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getCamperList.fulfilled, (state, action) => {
      state.campers = [...state.campers, ...action.payload];
    }),
});

export const campersReducer = camperSlice.reducer;
export const { addToFavorite, deleteFromFavorite } = camperSlice.actions;
