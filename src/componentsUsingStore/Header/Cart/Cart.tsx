import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

import { Basket } from "@icons/Basket";

import { cartItemsLengthSelector } from "./services/selectors";

import styles from "./Cart.module.css";

export const Cart: FC = () => {
    const cartItemsLength = useSelector(cartItemsLengthSelector);

    return (
        <div className={styles.container}>
            {cartItemsLength > 0 && <div className={styles.counter}>{cartItemsLength}</div>}
            <Link href={"/cart"}>
                <Basket height={25} width={28} color={"var(--color-white)"} />
            </Link>
        </div>
    );
};
