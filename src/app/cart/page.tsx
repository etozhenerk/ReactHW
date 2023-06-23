import { FC } from "react";

import { SelectedMovies } from "./SelectedMovies/SelectedMovies";
import { Summary } from "./Summary/Summary";

import styles from "./page.module.css";

const Cart: FC = () => {
    return (
        <div className={styles.container}>
            <SelectedMovies />
            <Summary />
        </div>
    );
};

export default Cart;
