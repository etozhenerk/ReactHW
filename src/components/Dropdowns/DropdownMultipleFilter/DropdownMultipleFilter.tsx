import { TMouseEvent } from "@common/types";
import { CheckIcon } from "@lan/lan-design-system";
import React from "react";

import { styler } from "@utils/styler";

import "../../../utils/helpers/prototypes";
import { Dropdown, DropdownTheme, themesItems } from "../Dropdown@UI-kit";

import styles from "./DropdownMultipleFilter.style.css";

type DropdownMultipleFilterProps<T extends React.Key> = {
    items: Record<T, string>;
    selectedItems: T[];
    setSelectedItems: (fields: T[]) => void;
    maxSelectedItemsLength?: number;
    placeholder?: string;
    theme?: DropdownTheme;
};

export const DropdownMultipleFilter = <T extends React.Key>(props: DropdownMultipleFilterProps<T>): JSX.Element => {
    const maxSelectedFiltersLength = props.maxSelectedItemsLength ?? 14;
    const placeholder = props.placeholder ?? "Не выбрано";
    const theme = props.theme ?? "secondary-grey";
    const themeStyles = themesItems[theme];

    const onSelect = (e: TMouseEvent<HTMLLIElement>, key: T): void => {
        e.stopPropagation();
        props.setSelectedItems(props.selectedItems.toggle(key));
    };

    const getSelectedDropdownFields = (): string => {
        const selectedTitles = (Object.entries(props.items) as [T, string][])
            .filter(([key]) => props.selectedItems.includes(key))
            .map(([_, value]) => value);

        const joinedTitles = selectedTitles.join(", ");
        return joinedTitles.length > 0 ? joinedTitles.withEllipsis(maxSelectedFiltersLength) : placeholder;
    };

    return (
        <Dropdown selectedValue={getSelectedDropdownFields()} theme={props.theme}>
            {(Object.entries(props.items) as [T, string][]).map(([key, value]) => (
                <li
                    key={key}
                    className={styler(styles.dropdownItem, themeStyles.dropdownItem, styles.dropdownItemWithCheckIcon)}
                    onClick={(e) => onSelect(e, key)}
                >
                    {props.selectedItems.some((item) => item === key) && (
                        <span className={styles.dropdownItemCheckIcon}>
                            <CheckIcon width={14} height={14} color={"#000"} />
                        </span>
                    )}
                    <p className={styler(styles.text, themeStyles.text)}>{value}</p>
                </li>
            ))}
        </Dropdown>
    );
};
