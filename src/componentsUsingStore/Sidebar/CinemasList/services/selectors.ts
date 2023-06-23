import { AppState } from "@store/store.types";

export const selectedCinemaIdSelector = (state: AppState) => state.home.selectedCinemaId;
