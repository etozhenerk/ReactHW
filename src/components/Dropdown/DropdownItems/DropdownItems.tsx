import { dropdownsMountNodeId } from "@common/consts";
import classNames from "classnames";
import { FC, CSSProperties, PropsWithChildren } from "react";

import { Portal } from "@components/Portal/Portal";

import { useCreateNodeWithId } from "@hooks/useCreateNodeWithId";

import styles from "./DropdownItems.module.css";

interface DropdownItemsProps {
    show: boolean;
    itemsContainerStyles: CSSProperties;
    items: Record<string, string>;
    selectedKey: string;
    setSelectedValue: (key: string) => void;
}

export const DropdownItems: FC<PropsWithChildren<DropdownItemsProps>> = ({
    show,
    itemsContainerStyles,
    items,
    selectedKey,
    setSelectedValue,
}) => {
    const node = useCreateNodeWithId(dropdownsMountNodeId);

    return (
        <Portal mountElement={node}>
            <ul
                className={classNames(styles.container, {
                    [styles.hide]: !show,
                })}
                style={itemsContainerStyles}
            >
                {Object.entries(items).map(([key, value]) => (
                    <li
                        onClick={() => setSelectedValue(key)}
                        className={classNames(styles.item, { [styles.selected]: selectedKey === key })}
                        key={key}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </Portal>
    );
};
