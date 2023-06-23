"use client";

import { FC } from "react";

import { PendingErrorGuard } from "@components/PendingErrorGuard/PendingErrorGuard";

import { useGetMovieInfoQuery } from "@store/services/movieApi";

import { MovieInfo } from "./MovieInfo/MovieInfo";
import { Reviews } from "./Reviews/Reviews";

import styles from "./page.module.css";

interface PageProps {
    params: {
        id: string;
    };
}

const Page: FC<PageProps> = ({ params: { id } }) => {
    const { data, isLoading, isError } = useGetMovieInfoQuery(id);
    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} isError={isError}>
                {data && (
                    <>
                        <MovieInfo id={id} movie={data.movie} />
                        <Reviews reviews={data.reviews} />
                    </>
                )}
            </PendingErrorGuard>
        </div>
    );
};

export default Page;
