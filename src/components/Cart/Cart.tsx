import { Basket } from "@icons/Basket";
import Link from "next/link";
import { FC } from "react";

import styles from "./Cart.module.css";

export const Cart: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>{"30"}</div>
            <Link href={"/"}>
                <Basket height={25} width={28} color={"var(--color-white)"} />
            </Link>
        </div>
    );
};
