import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/home";

import { titleSelector } from "./selectors";

interface UseTitleInputParams {
    debouncedValue: string;
    onChange: (value: string) => void;
}

export const useTitleInput = (): UseTitleInputParams => {
    const title = useSelector(titleSelector);

    const dispatch = useDispatch();

    const [debouncedValue, setDebouncedValue] = useState(title);

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(actions.setMovieTitle(debouncedValue));
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [debouncedValue]);

    const onChange = useCallback((value: string): void => setDebouncedValue(value), []);

    return { debouncedValue, onChange };
};
