import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/home";

import { selectedGenreSelector } from "./selectors";

export const useGenders = (): {
    selectedGenre: string;
    setSelectedValue: (key: string) => void;
} => {
    const selectedGenre = useSelector(selectedGenreSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(actions.setSelectedGenre("all"));
        };
    }, []);

    const setSelectedValue = useCallback((key: string) => {
        dispatch(actions.setSelectedGenre(key));
    }, []);

    return { selectedGenre, setSelectedValue };
};
