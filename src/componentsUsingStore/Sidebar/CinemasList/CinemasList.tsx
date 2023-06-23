import { FC } from "react";

import { Dropdown } from "@components/Dropdown/Dropdown";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

export const CinemasList: FC = () => {
    return (
        <SelectWrapper label="Кинотеатр">
            <Dropdown
                selectedKey={null}
                items={{
                    "1": "item",
                    "2": "item",
                    "3": "item",
                }}
                setSelectedValue={(key) => console.log(key)}
                placeholder="Выберите кинотеатр"
            />
        </SelectWrapper>
    );
};
