import Image from "next/image";
import { FC } from "react";

import { Buttons } from "./Buttons/Buttons";

import styles from "./FilmCard.module.css";

export const FilmCard: FC = () => {
    return (
        <section className={styles.container}>
            <Image className={styles.image} src="/test.jpg" width={100} height={120} alt="" />
            <div className={styles.textBlock}>
                <h3 className={styles.title}>{"Властелин колец: Братство кольца"}</h3>
                <p className={styles.description}>{"Фэнтези"}</p>
            </div>
            <Buttons />
        </section>
    );
};
