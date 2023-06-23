export interface InitState {
    movieTitle: string;
    selectedCinemaId: string;
    selectedGenre: string;
}

export const initState: InitState = {
    movieTitle: "",
    selectedCinemaId: "all",
    selectedGenre: "all",
};
