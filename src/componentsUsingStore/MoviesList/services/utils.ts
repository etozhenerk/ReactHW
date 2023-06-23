import { Movie } from "@store/services/movieApi.types";

export const getFilteredMovies = (data: Movie[], genre: string, title: string): Movie[] =>
    data ? data.filter((item) => item.title.startsWith(title) && (genre === "all" || genre === item.genre)) : [];
