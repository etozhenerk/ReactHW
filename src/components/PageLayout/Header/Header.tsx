import { FC } from "react";

import styles from "./Header.module.css";
import { Cart } from "@/components/Cart/Cart";

export const Header: FC = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{"Билетопоиск"}</h1>
            <Cart />
        </header>
    );
};
