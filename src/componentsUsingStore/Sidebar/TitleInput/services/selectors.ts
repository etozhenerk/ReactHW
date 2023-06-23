import { AppState } from "@store/store.types";

export const titleSelector = (state: AppState) => state.home.movieTitle;
