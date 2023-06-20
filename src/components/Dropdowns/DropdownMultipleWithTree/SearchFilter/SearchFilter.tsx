import { TMouseEvent } from "@common/types";
import React from "react";

import { Search } from "../../../../Search";

import styles from "./SearchFilter.style.css";

type SearchFilterProps = {
    filterQuery: string;
    setFilterQuery: (query: string) => void;
};

export const SearchFilter: React.FC<SearchFilterProps> = (props) => {
    const stopPropagation = (e: TMouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    };

    return (
        <div onClick={stopPropagation}>
            <Search placeholder={"Поиск"} inputQuery={props.filterQuery ?? ""} setInputQuery={props.setFilterQuery} withoutIcon />
            <div className={styles.border} />
        </div>
    );
};
