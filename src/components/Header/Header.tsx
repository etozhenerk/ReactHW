import { FC } from "react";

import { Cart } from "@components/Cart/Cart";

import styles from "./Header.module.css";

export const Header: FC = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{"Билетопоиск"}</h1>
            <Cart />
        </header>
    );
};
