import { Cinema } from "@store/services/movieApi.types";

export const getCinemaList = (data: Cinema[]): Record<string, string> =>
    data ? data.reduce((prev, next) => ({ ...prev, [next.id]: next.name }), { all: "Все" }) : {};
