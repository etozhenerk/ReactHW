"use client";

import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { SelectedMovies } from "./SelectedMovies/SelectedMovies";

import styles from "./page.module.css";

const Cart: FC = () => {
    return (
        <div className={styles.container}>
            <SelectedMovies />
            <BlockWrapper className={styles.summary}>
                <span>{"Итого билетов:"}</span>
                <span>{"7"}</span>
            </BlockWrapper>
        </div>
    );
};

export default Cart;
