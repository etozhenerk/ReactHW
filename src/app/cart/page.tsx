"use client";

import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { FilmCard } from "@components/FilmCard/FilmCard";

import styles from "./page.module.css";

const Cart: FC = () => {
    return (
        <div className={styles.container}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <BlockWrapper className={styles.summary}>
                <span>{"Итого билетов:"}</span>
                <span>{"7"}</span>
            </BlockWrapper>
        </div>
    );
};

export default Cart;
