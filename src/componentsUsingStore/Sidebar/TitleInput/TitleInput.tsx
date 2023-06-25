"use client";

import { FC } from "react";

import { Input } from "@components/Input/Input";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

import { useTitleInput } from "./services/useTitleInput";

export const TitleInput: FC = () => {
    const { debouncedValue, onChange } = useTitleInput();

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input id="title" value={debouncedValue} onChange={onChange} placeholder="Введите название" />
        </SelectWrapper>
    );
};
