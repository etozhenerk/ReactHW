import Link from "next/link";
import { FC } from "react";

import { Cart } from "@components/Cart/Cart";

import styles from "./Header.module.css";

export const Header: FC = () => {
    return (
        <header className={styles.container}>
            <Link className={styles.title} href={"/"}>
                {"Билетопоиск"}
            </Link>
            <Cart />
        </header>
    );
};
