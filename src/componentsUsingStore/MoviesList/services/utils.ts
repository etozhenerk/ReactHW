import { Movie } from "@store/services/movieApi.types";

export const getFilteredMovies = (data: Movie[], genre: string, title: string): Movie[] =>
    data
        ? data.filter(
              (item) => item.title.toLocaleLowerCase().startsWith(title.toLocaleLowerCase()) && (genre === "all" || genre === item.genre),
          )
        : [];
