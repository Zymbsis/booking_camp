import { createSlice } from '@reduxjs/toolkit';
import { getCamperByIds, getCampersList } from './operations';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    favoriteCampers: [],
    favoriteIds: [],
    params: { page: 1, form: '', location: '' },
    isLoading: false,
  },
  reducers: {
    deleteFromFavorite: (state, action) => {
      state.favoriteIds = state.favoriteIds.filter(
        (item) => item !== action.payload,
      );
      state.favoriteCampers = state.favoriteCampers.filter(
        (item) => item.id !== action.payload,
      );
    },
    changeParams: (state, action) => {
      state.params = action.payload;
      state.campers = [];
    },
    addToFavorite: (state, action) => {
      state.favoriteIds.push(action.payload.id);
      state.favoriteCampers.push(action.payload);
    },
    nextPage: (state) => {
      state.params.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCamperByIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoriteCampers = action.payload;
      })
      .addCase(getCamperByIds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamperByIds.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCampersList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.params.page === 1) {
          state.campers = action.payload;
        } else {
          state.campers.push(...action.payload);
        }
      })
      .addCase(getCampersList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampersList.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const campersReducer = camperSlice.reducer;
export const { deleteFromFavorite, changeParams, addToFavorite, nextPage } =
  camperSlice.actions;
