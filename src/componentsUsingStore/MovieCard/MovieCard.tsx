import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { CounterButtons } from "@componentsUsingStore/CounterButtons/CounterButtons";

import { Movie } from "@store/services/movieApi.types";

import { genresMap } from "@common/consts";

import styles from "./MovieCard.module.css";

interface MovieCardProps {
    movie: Movie;
    withDeleteButton: boolean;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, withDeleteButton }) => {
    return (
        <BlockWrapper className={styles.container}>
            <Image loading="lazy" className={styles.poster} src={movie.posterUrl} width={100} height={120} alt="image" />
            <div className={styles.description}>
                <Link href={`/film/${movie.id}`} className={styles.title}>
                    {movie.title}
                </Link>
                <p className={styles.genre}>{genresMap[movie.genre]}</p>
            </div>
            <CounterButtons withDeleteButton={withDeleteButton} id={movie.id} />
        </BlockWrapper>
    );
};
