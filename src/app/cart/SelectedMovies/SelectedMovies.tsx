"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "@componentsUsingStore/MovieCard/MovieCard";

import { useGetMoviesQuery } from "@store/services/movieApi";

import { selectedMoviesSelector } from "./services/selectors";

export const SelectedMovies: FC = () => {
    const selectedMovies = useSelector(selectedMoviesSelector);

    const { data, isLoading, error } = useGetMoviesQuery();

    const movies = data ? data.filter((item) => !!selectedMovies[item.id]) : [];

    return (
        <>
            {movies.map((movie) => (
                <MovieCard withDeleteButton={true} key={movie.id} movie={movie} />
            ))}
        </>
    );
};
