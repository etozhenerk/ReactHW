import { useMemo } from "react";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "@store/services/movieApi";
import { Movie } from "@store/services/movieApi.types";

import { filterParamsSelector } from "./selectors";
import { getFilteredMovies } from "./utils";

export const useMoviesList = (): {
    filteredData: Movie[];
    isFetching: boolean;
    isError: boolean;
} => {
    const filterParams = useSelector(filterParamsSelector);

    const { data, isFetching, isError } = useGetMoviesQuery(filterParams.cinemaId);

    const filteredData = useMemo(
        () => getFilteredMovies(data, filterParams.genre, filterParams.title),
        [data, filterParams.title, filterParams.genre],
    );

    return { filteredData, isFetching, isError };
};
