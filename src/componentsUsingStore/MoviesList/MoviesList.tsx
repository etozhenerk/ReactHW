"use client";

import { FC } from "react";

import { PendingErrorGuard } from "@components/PendingErrorGuard/PendingErrorGuard";

import { useMoviesList } from "./services/useMoviesList";

import { MovieCard } from "../MovieCard/MovieCard";

import styles from "./MoviesList.module.css";

export const MoviesList: FC = () => {
    const { filteredData, isFetching, isError } = useMoviesList();

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isFetching} isError={isError}>
                {filteredData.map((movie) => (
                    <MovieCard withDeleteButton={false} key={movie.id} movie={movie} />
                ))}
            </PendingErrorGuard>
        </div>
    );
};
