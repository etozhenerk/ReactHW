import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/home";
import { useGetCinemasQuery } from "@store/services/movieApi";

import { selectedCinemaIdSelector } from "./selectors";
import { getCinemaList } from "./utils";

interface UseCinemasParams {
    cinemas: Record<string, string>;
    selectedCinemaId: string;
    isLoading: boolean;
    setSelectedValue: (key: string) => void;
}

export const useCinemas = (): UseCinemasParams => {
    const { data, isLoading } = useGetCinemasQuery();
    const selectedCinemaId = useSelector(selectedCinemaIdSelector);
    const dispatch = useDispatch();

    const setSelectedValue = useCallback((key: string) => {
        dispatch(actions.setSelectedCinemaId(key));
    }, []);

    const cinemas = useMemo(() => getCinemaList(data), [data]);

    return { cinemas, selectedCinemaId, isLoading, setSelectedValue };
};
