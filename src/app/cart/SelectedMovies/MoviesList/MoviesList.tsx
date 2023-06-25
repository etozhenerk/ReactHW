"use client";

import { FC, useMemo } from "react";
import { useSelector } from "react-redux";

import { PendingErrorGuard } from "@components/PendingErrorGuard/PendingErrorGuard";
import { MovieCard } from "@componentsUsingStore/MovieCard/MovieCard";

import { useGetMoviesQuery } from "@store/services/movieApi";

import { selectedMoviesSelector } from "./services/selectors";
import { getSelectedMovies } from "./services/utils";

export const MoviesList: FC = () => {
    const selectedMovies = useSelector(selectedMoviesSelector);

    const { data, isLoading, isError } = useGetMoviesQuery("");

    const movies = useMemo(() => getSelectedMovies(data, selectedMovies), [data, selectedMovies]);

    return (
        <PendingErrorGuard isLoading={isLoading} isError={isError}>
            {movies.map((movie) => (
                <MovieCard withDeleteButton={true} key={movie.id} movie={movie} />
            ))}
        </PendingErrorGuard>
    );
};
