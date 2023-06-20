import { Close } from "@icons/Close";
import { Minus } from "@icons/Minus";
import { Plus } from "@icons/Plus";
import { FC } from "react";

import { Button } from "@components/Button/Button";

import styles from "./Buttons.module.css";

export const Buttons: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <Button disabled theme="primarySmall" onClick={() => {}}>
                    <Minus width={9} height={9} />
                </Button>
                <span className={styles.counter}>{"0"}</span>
                <Button theme="primarySmall" onClick={() => {}}>
                    <Plus width={9} height={9} />
                </Button>
            </div>
            <Close className={styles.close} width={12.5} height={12.5} color="var(--color-gray-dark)" />
        </div>
    );
};
