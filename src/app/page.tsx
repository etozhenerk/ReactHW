import { FC } from "react";

import { MoviesList } from "@componentsUsingStore/MoviesList/MoviesList";
import { Sidebar } from "@componentsUsingStore/Sidebar/Sidebar";

import styles from "./page.module.css";

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />

            <MoviesList />
        </div>
    );
};

export default Home;
