import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { Buttons } from "./Buttons/Buttons";

import styles from "./FilmCard.module.css";

export const FilmCard: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <Image className={styles.image} src="/test.jpg" width={100} height={120} alt="image" />
            <div className={styles.textBlock}>
                <Link href={"/film/1"} className={styles.title}>
                    {"Властелин колец: Братство кольца"}
                </Link>
                <p className={styles.description}>{"Фэнтези"}</p>
            </div>
            <Buttons />
        </BlockWrapper>
    );
};
