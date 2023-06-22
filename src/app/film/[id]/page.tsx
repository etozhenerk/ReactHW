"use client";

import { FC } from "react";

import { Comment } from "@components/Comment/Comment";
import { FilmInfo } from "@components/FilmInfo/FilmInfo";

import styles from "./page.module.css";

interface PageProps {
    params: {
        id: string;
    };
}

const Page: FC<PageProps> = ({ params: { id } }) => {
    return (
        <div className={styles.container}>
            <FilmInfo />
            <Comment />
            <Comment />
        </div>
    );
};

export default Page;
