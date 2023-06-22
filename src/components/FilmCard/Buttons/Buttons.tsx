import { Close } from "@icons/Close";
import { FC } from "react";

import { CounterButtons } from "@components/CounterButtons/CounterButtons";

import styles from "./Buttons.module.css";

export const Buttons: FC = () => {
    return (
        <div className={styles.container}>
            <CounterButtons />
            <Close className={styles.close} width={12.5} height={12.5} color="var(--color-gray-dark)" />
        </div>
    );
};
