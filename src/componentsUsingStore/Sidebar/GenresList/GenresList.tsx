import { FC } from "react";

import { Dropdown } from "@components/Dropdown/Dropdown";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

import { genresMap } from "@common/consts";

import { useGenders } from "./services/useGenders";

export const GenresList: FC = () => {
    const { selectedGenre, setSelectedValue } = useGenders();

    return (
        <SelectWrapper label="Жанр">
            <Dropdown
                isLoading={false}
                selectedKey={selectedGenre}
                items={genresMap}
                setSelectedValue={setSelectedValue}
                placeholder="Выберите жанр"
            />
        </SelectWrapper>
    );
};
