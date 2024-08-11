import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCamperByIds, getCamperList } from './operations';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    page: 1,
    isLoading: false,
    hasNextPage: true,
    favoritesId: [],
    favoritesList: [],
  },
  reducers: {
    deleteFromFavorite: (state, action) => {
      state.favoritesId = state.favoritesId.filter(
        (item) => item !== action.payload,
      );
      state.favoritesList = state.favoritesList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCamperList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = [...state.campers, ...action.payload.data];
        state.hasNextPage = action.payload.hasNextPage;
        state.page = state.page + 1;
      })
      .addCase(getCamperList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamperList.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.favoritesList = [...state.favoritesList, action.payload];
        state.favoritesId = [...state.favoritesId, action.payload.id];
      })
      .addCase(getCamperByIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoritesList = action.payload;
      })
      .addCase(getCamperByIds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamperByIds.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const campersReducer = camperSlice.reducer;
export const { deleteFromFavorite } = camperSlice.actions;
