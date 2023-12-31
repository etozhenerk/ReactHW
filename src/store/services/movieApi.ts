import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Cinema, Movie, MovieInfo, Review } from "./movieApi.types";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], string>({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
        getCinemas: builder.query<Cinema[], void>({ query: () => "cinemas" }),
        getMovieInfo: builder.query<MovieInfo, string>({
            async queryFn(movieId, _queryApi, _extraOptions, fetchWithBQ) {
                const movie = fetchWithBQ(`movie?movieId=${movieId}`);
                const reviews = fetchWithBQ(`reviews?movieId=${movieId}`);

                const results = await Promise.all([movie, reviews]);

                const data: MovieInfo = {
                    movie: results[0].data as Movie,
                    reviews: results[1].data as Review[],
                };

                return { data };
            },
        }),
    }),
});

export const { useGetMoviesQuery, useGetCinemasQuery, useGetMovieInfoQuery } = movieApi;
