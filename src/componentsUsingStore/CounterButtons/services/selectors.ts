import { AppState } from "@store/store.types";

export const countSelector = (state: AppState, id: string) => state.cart[id] || 0;
