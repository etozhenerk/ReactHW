import { FC } from "react";

import { Dropdown } from "@components/Dropdown/Dropdown";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

import { useCinemas } from "./services/useCinemas";

export const CinemasList: FC = () => {
    const { cinemas, selectedCinemaId, isLoading, setSelectedValue } = useCinemas();

    return (
        <SelectWrapper label="Кинотеатр">
            <Dropdown
                selectedKey={selectedCinemaId}
                isLoading={isLoading}
                items={cinemas}
                setSelectedValue={setSelectedValue}
                placeholder="Выберите кинотеатр"
            />
        </SelectWrapper>
    );
};
