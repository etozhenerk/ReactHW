import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/home";

import { selectedGenreSelector } from "./selectors";

interface UseGendersParams {
    selectedGenre: string;
    setSelectedValue: (key: string) => void;
}

export const useGenders = (): UseGendersParams => {
    const selectedGenre = useSelector(selectedGenreSelector);
    const dispatch = useDispatch();

    const setSelectedValue = useCallback((key: string) => {
        dispatch(actions.setSelectedGenre(key));
    }, []);

    return { selectedGenre, setSelectedValue };
};
