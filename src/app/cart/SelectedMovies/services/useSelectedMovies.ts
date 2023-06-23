import { Movie } from "@store/services/movieApi.types";

export const getSelectedMovies = (data: Movie[], list: Record<string, number>) => (data ? data.filter((item) => !!list[item.id]) : []);
