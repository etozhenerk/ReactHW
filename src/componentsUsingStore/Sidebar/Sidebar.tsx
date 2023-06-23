"use client";

import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { CinemasList } from "./CinemasList/CinemasList";
import { GenresList } from "./GenresList/GenresList";
import { TitleInput } from "./TitleInput/TitleInput";

import styles from "./Sidebar.module.css";

export const Sidebar: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <h2 className={styles.title}>{"Фильтр поиска"}</h2>
            <div className={styles.selectors}>
                <TitleInput />
                <GenresList />
                <CinemasList />
            </div>
        </BlockWrapper>
    );
};
