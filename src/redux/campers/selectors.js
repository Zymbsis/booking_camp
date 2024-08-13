export const selectCamperList = (state) => state.campers.campers;
export const selectFavoritesId = (state) => state.campers.favoriteIds;
export const selectFavoritesList = (state) => state.campers.favoriteCampers;
export const selectPage = (state) => state.campers.params.page;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectParams = (state) => state.campers.params;
