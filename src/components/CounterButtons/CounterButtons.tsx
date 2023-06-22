import { Minus } from "@icons/Minus";
import { Plus } from "@icons/Plus";
import { FC } from "react";

import { Button } from "@components/Button/Button";

import styles from "./CounterButtons.module.css";

export const CounterButtons: FC = () => {
    return (
        <div className={styles.container}>
            <Button disabled theme="primarySmall" onClick={() => {}}>
                <Minus width={9} height={9} color={"var(--color-white)"} />
            </Button>
            <span className={styles.counter}>{"0"}</span>
            <Button theme="primarySmall" onClick={() => {}}>
                <Plus width={9} height={9} color={"var(--color-white)"} />
            </Button>
        </div>
    );
};
