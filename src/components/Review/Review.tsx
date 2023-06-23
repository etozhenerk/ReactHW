import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { EmptyImage } from "@components/EmptyImage/EmptyImage";

import styles from "./Review.module.css";

interface ReviewProps {
    name: string;
    text: string;
    rating: number;
}

export const Review: FC<ReviewProps> = ({ name, text, rating }) => {
    return (
        <BlockWrapper className={styles.container}>
            <EmptyImage className={styles.photo} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.comment}>{text}</p>
            <div className={styles.rating}>
                <span>{"Оценка: "}</span>
                <span className={styles.number}>{rating}</span>
            </div>
        </BlockWrapper>
    );
};
