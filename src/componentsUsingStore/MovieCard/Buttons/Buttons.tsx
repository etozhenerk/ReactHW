import { Close } from "@icons/Close";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { CounterButtons } from "@componentsUsingStore/CounterButtons/CounterButtons";

import { actions } from "@store/pages/cart";

import styles from "./Buttons.module.css";

interface ButtonsProps {
    id: string;
    withDeleteButton: boolean;
}

export const Buttons: FC<ButtonsProps> = ({ id, withDeleteButton }) => {
    const dispatch = useDispatch();

    const onCloseClick = useCallback(() => dispatch(actions.deleteFilm(id)), []);

    return (
        <div className={styles.container}>
            <CounterButtons id={id} />
            {withDeleteButton && (
                <Close onClick={onCloseClick} className={styles.close} width={12.5} height={12.5} color="var(--color-gray-dark)" />
            )}
        </div>
    );
};
