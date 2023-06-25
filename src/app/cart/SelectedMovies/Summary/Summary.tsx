"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { cartItemsLengthSelector } from "./services/selectors";

import styles from "./Summary.module.css";

export const Summary: FC = () => {
    const cartItemsLength = useSelector(cartItemsLengthSelector);

    return (
        <BlockWrapper className={styles.container}>
            <span>{"Итого билетов:"}</span>
            <span>{cartItemsLength}</span>
        </BlockWrapper>
    );
};
