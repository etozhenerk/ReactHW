import { AppState } from "@store/store.types";

export const selectedGenreSelector = (state: AppState) => state.home.selectedGenre;
