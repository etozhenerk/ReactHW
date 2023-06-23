import { useMemo } from "react";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "@store/services/movieApi";
import { Movie } from "@store/services/movieApi.types";

import { useDebounce } from "@hooks/useDebounce";

import { movieTitleSelector, selectedCinemaIdSelector, selectedGenreSelector } from "./selectors";
import { getFilteredMovies } from "./utils";

export const useMoviesList = (): {
    filteredData: Movie[];
    isFetching: boolean;
    isError: boolean;
} => {
    const title = useSelector(movieTitleSelector);
    const genre = useSelector(selectedGenreSelector);
    const cinemaId = useSelector(selectedCinemaIdSelector);

    const { data, isFetching, isError } = useGetMoviesQuery(cinemaId);

    const debouncedTitle = useDebounce(title, 500);

    const filteredData = useMemo(() => getFilteredMovies(data, genre, debouncedTitle), [data, title, genre, debouncedTitle]);

    return { filteredData, isFetching, isError };
};
