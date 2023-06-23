import { FC } from "react";

import { Input } from "@components/Input/Input";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

export const TitleInput: FC = () => {
    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input id="title" value="" onChange={() => {}} placeholder="Введите название" />
        </SelectWrapper>
    );
};
