import { Close } from "@icons/Close";
import { Minus } from "@icons/Minus";
import { Plus } from "@icons/Plus";
import { FC } from "react";

import { Button } from "@components/Button/Button";
import { Modal } from "@components/Modal/Modal";

import { useCounterButton } from "./services/useCounterButtons";

import styles from "./CounterButtons.module.css";

interface CounterButtonsProps {
    id: string;
    withDeleteButton: boolean;
}

export const CounterButtons: FC<CounterButtonsProps> = ({ id, withDeleteButton }) => {
    const { count, disabledDecrement, disabledIncrement, showModal, onCloseClick, onMinusClick, onPlusClick, onSuccess, onCloseModal } =
        useCounterButton(id);

    return (
        <div className={styles.container}>
            <div className={styles.counters}>
                <Button disabled={disabledDecrement} theme="primarySmall" onClick={onMinusClick}>
                    <Minus width={9} height={9} color={"var(--color-white)"} />
                </Button>
                <span className={styles.counter}>{count}</span>
                <Button theme="primarySmall" onClick={onPlusClick}>
                    <Plus disabled={disabledIncrement} width={9} height={9} color={"var(--color-white)"} />
                </Button>
            </div>
            {withDeleteButton && (
                <Close onClick={onCloseClick} className={styles.close} width={12.5} height={12.5} color="var(--color-gray-dark)" />
            )}
            {showModal && <Modal show={showModal} onClose={onCloseModal} onSuccess={onSuccess} />}
        </div>
    );
};
