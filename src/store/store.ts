import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { cart } from "./cart";
import { home } from "./home";
import { movieApi } from "./services/movieApi";

export const rootReducer = combineReducers({
    cart,
    home,
    [movieApi.reducerPath]: movieApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});
