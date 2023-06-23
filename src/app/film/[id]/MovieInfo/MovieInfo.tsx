"use client";

import { genresMap } from "@common/consts";
import Image from "next/image";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { CounterButtons } from "@componentsUsingStore/CounterButtons/CounterButtons";

import { useGetMovieQuery } from "@store/services/movieApi";

import { InfoItem } from "./InfoItem/InfoItem";

import styles from "./MovieInfo.module.css";

interface MovieInfoProps {
    id: string;
}

export const MovieInfo: FC<MovieInfoProps> = ({ id }) => {
    const { data, isLoading, error } = useGetMovieQuery(id);

    return (
        data && (
            <BlockWrapper className={styles.container}>
                <Image className={styles.image} src={data.posterUrl} width={400} height={500} alt="image" />
                <div className={styles.info}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.items}>
                        <InfoItem label="Жанр:" text={genresMap[data.genre]} />
                        <InfoItem label="Год выпуска:" text={data.releaseYear} />
                        <InfoItem label="Рейтинг:" text={data.rating} />
                        <InfoItem label="Режиссер:" text={data.director} />
                    </div>
                    <CounterButtons id={id} />
                </div>
                <div className={styles.description}>
                    <h3 className={styles.title}>{"Описание"}</h3>
                    <p className={styles.text}>{data.description}</p>
                </div>
            </BlockWrapper>
        )
    );
};
