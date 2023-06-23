import { Minus } from "@icons/Minus";
import { Plus } from "@icons/Plus";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@components/Button/Button";

import { actions } from "@store/pages/cart";
import { AppState } from "@store/store.types";

import { countSelector } from "./services/selectors";

import styles from "./CounterButtons.module.css";

interface CounterButtonsProps {
    id: string;
}

export const CounterButtons: FC<CounterButtonsProps> = ({ id }) => {
    const count = useSelector((state: AppState) => countSelector(state, id));

    const dispatch = useDispatch();

    const increment = useCallback(() => dispatch(actions.incrementFilmCount(id)), []);
    const decrement = useCallback(() => dispatch(actions.decrementFilmCount(id)), []);

    const disabledDecrement = count === 0;
    const disabledIncrement = count === 30;

    return (
        <div className={styles.container}>
            <Button disabled={disabledDecrement} theme="primarySmall" onClick={decrement}>
                <Minus width={9} height={9} color={"var(--color-white)"} />
            </Button>
            <span className={styles.counter}>{count}</span>
            <Button theme="primarySmall" onClick={increment}>
                <Plus disabled={disabledIncrement} width={9} height={9} color={"var(--color-white)"} />
            </Button>
        </div>
    );
};
