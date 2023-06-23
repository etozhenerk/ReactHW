import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Cinema, Movie, Review } from "./movieApi.types";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({ query: () => "movies" }),
        getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
        getCinemaMovies: builder.query<Movie, string>({ query: (cinemaId) => `movie?cinemaId=${cinemaId}` }),
        getCinemas: builder.query<Cinema[], void>({ query: () => "cinemas" }),
        getReviews: builder.query<Review[], void>({ query: () => "reviews" }),
        getReview: builder.query<Review[], string>({ query: (movieId) => `reviews?movieId=${movieId}` }),
        getMoviesList: builder.query<Movie[], string[]>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const requests = _arg.map((movieId) => fetchWithBQ(`movie?movieId=${movieId}`));

                const results = (await Promise.all(requests)).map((item) => item.data as Movie);

                return { data: results };
            },
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetCinemaMoviesQuery,
    useGetCinemasQuery,
    useGetReviewsQuery,
    useGetReviewQuery,
    useGetMoviesListQuery,
} = movieApi;
