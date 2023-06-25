import { AppState } from "@store/store.types";

export const cartItemsLengthSelector = (state: AppState) => Object.values(state.cart).reduce((prev, next) => prev + next, 0);
