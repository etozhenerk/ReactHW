import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { movieApi } from "./services/movieApi";

import { cart } from "./cart";
import { home } from "./home";

export const rootReducer = combineReducers({
    cart,
    home,
    [movieApi.reducerPath]: movieApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});
