"use client";

import { genresMap } from "@common/consts";
import Image from "next/image";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { CounterButtons } from "@componentsUsingStore/CounterButtons/CounterButtons";

import { Movie } from "@store/services/movieApi.types";

import { InfoItem } from "./InfoItem/InfoItem";

import styles from "./MovieInfo.module.css";

interface MovieInfoProps {
    id: string;
    movie: Movie;
}

export const MovieInfo: FC<MovieInfoProps> = ({ movie, id }) => {
    return (
        <BlockWrapper className={styles.container}>
            <Image className={styles.image} src={movie.posterUrl} width={400} height={500} alt="image" />
            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <div className={styles.items}>
                    <InfoItem label="Жанр:" text={genresMap[movie.genre]} />
                    <InfoItem label="Год выпуска:" text={movie.releaseYear} />
                    <InfoItem label="Рейтинг:" text={movie.rating} />
                    <InfoItem label="Режиссер:" text={movie.director} />
                </div>
                <CounterButtons id={id} withDeleteButton={false} />
            </div>
            <div className={styles.description}>
                <h3 className={styles.title}>{"Описание"}</h3>
                <p className={styles.text}>{movie.description}</p>
            </div>
        </BlockWrapper>
    );
};
