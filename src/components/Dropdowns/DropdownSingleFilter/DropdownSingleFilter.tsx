import React from "react";

import { styler } from "@utils/styler";

import { Dropdown, DropdownTheme, themesItems } from "../Dropdown@UI-kit";

import styles from "./DropdownSingleFilter.style.css";

export type DropdownSingleFilterProps<T extends React.Key> = {
    items: Record<T, string>;
    selectedItem: T | null;
    setSelectedItem: (k: T) => void;
    maxSelectedItemLength?: number;
    upperUnfold?: boolean;
    disabled?: boolean;
    theme?: DropdownTheme;
};

export const DropdownSingleFilter = <T extends React.Key>(props: DropdownSingleFilterProps<T>): JSX.Element => {
    const theme = props.theme ?? "secondary-grey";
    const themeStyles = themesItems[theme];

    const getSelectedValue = (): string => {
        const selectedText = props.items[props.selectedItem] ?? "Не выбрано";

        return props.maxSelectedItemLength && selectedText.length > props.maxSelectedItemLength
            ? `${selectedText.slice(0, props.maxSelectedItemLength)}...`
            : selectedText;
    };

    return (
        <Dropdown selectedValue={getSelectedValue()} upperUnfold={props.upperUnfold} disabled={props.disabled} theme={props.theme}>
            {(Object.entries(props.items) as [T, string][]).map(([key, value]) => (
                <li
                    key={key}
                    className={styler(styles.dropdownItem, themeStyles.dropdownItem, [
                        props.selectedItem === key,
                        themeStyles.dropdownItemActive,
                    ])}
                    onClick={() => props.setSelectedItem(key)}
                >
                    <p className={styler(styles.text, themeStyles.text)}>{value}</p>
                </li>
            ))}
        </Dropdown>
    );
};
