import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@components/Input/Input";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

import { actions } from "@store/home";

import { titleSelector } from "./services/selectors";

export const TitleInput: FC = () => {
    const title = useSelector(titleSelector);

    const dispatch = useDispatch();

    const onChange = useCallback((value: string) => dispatch(actions.setMovieTitle(value)), []);

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input id="title" value={title} onChange={onChange} placeholder="Введите название" />
        </SelectWrapper>
    );
};
