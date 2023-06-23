import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "@store/store.types";

const selector = (state: AppState) => state.cart;

export const selectedMoviesSelector = createSelector([selector], (item) => item);
