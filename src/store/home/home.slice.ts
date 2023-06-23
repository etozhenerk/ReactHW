import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initState } from "./home.state";

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState: initState,
    reducers: {
        setMovieTitle: (state, { payload }: PayloadAction<string>) => {
            state.movieTitle = payload;
        },
        setSelectedCinemaId: (state, { payload }: PayloadAction<string>) => {
            state.selectedCinemaId = payload;
        },
        setSelectedGenre: (state, { payload }: PayloadAction<string>) => {
            state.selectedGenre = payload;
        },
    },
});

export const actions = homeSlice.actions;

export const home = homeSlice.reducer;
