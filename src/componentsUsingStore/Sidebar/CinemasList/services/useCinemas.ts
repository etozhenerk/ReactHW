import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "@store/home";
import { useGetCinemasQuery } from "@store/services/movieApi";

import { selectedCinemaIdSelector } from "./selectors";
import { getCinemaList } from "./utils";

export const useCinemas = (): {
    cinemas: Record<string, string>;
    selectedCinemaId: string;
    isLoading: boolean;
    setSelectedValue: (key: string) => void;
} => {
    const { data, isLoading } = useGetCinemasQuery();
    const selectedCinemaId = useSelector(selectedCinemaIdSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(actions.setSelectedCinemaId("all"));
        };
    }, []);

    const setSelectedValue = useCallback((key: string) => dispatch(actions.setSelectedCinemaId(key)), []);

    const cinemas = useMemo(() => getCinemaList(data), [data]);

    return { cinemas, selectedCinemaId, isLoading, setSelectedValue };
};
