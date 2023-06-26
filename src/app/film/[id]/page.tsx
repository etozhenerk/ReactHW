"use client";

import { FC } from "react";

import { EmptyContent } from "@components/EmptyContent/EmptyContent";
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
                {data && data.movie && data.reviews ? (
                    <>
                        <MovieInfo id={id} movie={data.movie} />
                        <Reviews reviews={data.reviews} />
                    </>
                ) : (
                    <EmptyContent text="Информации по фильму нет" />
                )}
            </PendingErrorGuard>
        </div>
    );
};

export default Page;
