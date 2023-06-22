import { FC } from "react";

import { FilmCard } from "@components/FilmCard/FilmCard";

import styles from "./FilmsList.module.css";

export const FilmsList: FC = () => {
    return (
        <div className={styles.container}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
        </div>
    );
};
