import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "@store/store.types";

export const movieTitleSelector = (state: AppState) => state.home.movieTitle;
export const selectedGenreSelector = (state: AppState) => state.home.selectedGenre;
export const selectedCinemaIdSelector = (state: AppState) => state.home.selectedCinemaId;

export const filterParamsSelector = createSelector([movieTitleSelector, selectedGenreSelector], (title, genre) => ({
    title,
    genre,
}));
