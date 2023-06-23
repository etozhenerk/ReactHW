import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { cart } from "./pages/cart";
import { movieApi } from "./services/movieApi";

export const rootReducer = combineReducers({
    cart,
    [movieApi.reducerPath]: movieApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});
