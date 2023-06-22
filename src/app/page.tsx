"use client";

import { FC } from "react";

import { FilmsList } from "@components/FilmsList/FilmsList";
import { Sidebar } from "@components/Sidebar/Sidebar";

import styles from "./page.module.css";

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <FilmsList />
        </div>
    );
};

export default Home;
