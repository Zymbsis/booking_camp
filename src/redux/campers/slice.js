import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCamperList } from './operations';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    page: 1,
    hasNextPage: true,
    favoritesId: [],
    favoritesList: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favoritesId.push(action.payload);
    },
    deleteFromFavorite: (state, action) => {
      state.favoritesId = state.favoritesId.filter(
        (item) => item !== action.payload,
      );
      state.favoritesList = state.favoritesList.filter(
        (item) => item.id !== action.payload,
      );
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCamperList.fulfilled, (state, action) => {
        state.campers = [...state.campers, ...action.payload.data];
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        const exists = state.favoritesList.some(
          (item) => item.id === action.payload.id,
        );
        if (!exists) {
          state.favoritesList.push(action.payload);
        }
      }),
});

export const campersReducer = camperSlice.reducer;
export const { addToFavorite, deleteFromFavorite, increasePage } =
  camperSlice.actions;
