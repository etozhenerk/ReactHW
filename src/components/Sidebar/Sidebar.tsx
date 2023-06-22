import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { Input } from "@components/Input/Input";
import { SelectWrapper } from "@components/SelectWrapper/SelectWrapper";

import styles from "./Sidebar.module.css";

export const Sidebar: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <h2 className={styles.title}>{"Фильтр поиска"}</h2>
            <div className={styles.selectors}>
                <SelectWrapper label="Название" htmlFor="title">
                    <Input id="title" value="" onChange={() => {}} placeholder="Введите название" />
                </SelectWrapper>
                <SelectWrapper label="Жанр">
                    <Dropdown
                        selectedKey={null}
                        items={{
                            "1": "item",
                            "2": "item",
                            "3": "item",
                        }}
                        setSelectedValue={(key) => console.log(key)}
                        placeholder="Выберите жанр"
                    />
                </SelectWrapper>
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
            </div>
        </BlockWrapper>
    );
};
