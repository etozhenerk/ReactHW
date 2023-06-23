"use client";

import { FC } from "react";

import { useGetMoviesQuery } from "@store/services/movieApi";

import { MovieCard } from "../MovieCard/MovieCard";

import styles from "./MoviesList.module.css";

export const MoviesList: FC = () => {
    const { data, isLoading, error } = useGetMoviesQuery();

    return (
        <div className={styles.container}>
            {data && data.map((movie) => <MovieCard withDeleteButton={false} key={movie.id} movie={movie} />)}
        </div>
    );
};
