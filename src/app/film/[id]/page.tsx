import { FC } from "react";

import { MovieInfo } from "./MovieInfo/MovieInfo";
import { Reviews } from "./Reviews/Reviews";

import styles from "./page.module.css";

interface PageProps {
    params: {
        id: string;
    };
}

const Page: FC<PageProps> = ({ params: { id } }) => {
    return (
        <div className={styles.container}>
            <MovieInfo id={id} />
            <Reviews id={id} />
        </div>
    );
};

export default Page;
