import { maxCartItems, minCartItems } from "@common/consts";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/cart";
import { AppState } from "@store/store.types";

import { countSelector } from "./selectors";

export const useCounterButton = (
    id: string,
): {
    count: number;
    disabledDecrement: boolean;
    disabledIncrement: boolean;
    showModal: boolean;
    onPlusClick: () => void;
    onMinusClick: () => void;
    onSuccess: () => void;
    onCloseClick: () => void;
    onCloseModal: () => void;
} => {
    const count = useSelector((state: AppState) => countSelector(state, id));

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const onPlusClick = useCallback(() => dispatch(actions.incrementFilmCount(id)), []);
    const onMinusClick = useCallback(() => {
        if (count === minCartItems) {
            setShowModal(true);
        } else {
            dispatch(actions.decrementFilmCount(id));
        }
    }, [count]);
    const onSuccess = useCallback(() => dispatch(actions.deleteFilm(id)), []);

    const onCloseClick = useCallback(() => setShowModal(true), []);

    const onCloseModal = useCallback(() => setShowModal(false), []);

    const disabledDecrement = count === minCartItems - 1;
    const disabledIncrement = count === maxCartItems;

    return { count, disabledDecrement, disabledIncrement, showModal, onCloseClick, onMinusClick, onPlusClick, onSuccess, onCloseModal };
};
