import React, { CSSProperties, PropsWithChildren } from "react";

import { styler } from "@utils/styler";

import { useCreateNodeWithId } from "../../../../common/hooks/useCreateNodeWithId";
import { Portal } from "../../../Portal";

import styles from "./DropdownItems.style.css";

type DropdownItemsProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    upperUnfold: boolean;
    itemsContainerStyles: CSSProperties;
    itemsContainerMountNodeId: string;
};

export const DropdownItems: React.FC<DropdownItemsProps> = (props: PropsWithChildren<DropdownItemsProps>) => {
    const node = useCreateNodeWithId(props.itemsContainerMountNodeId);

    return (
        <Portal mountElement={node}>
            <ul
                className={styler(
                    styles.dropdownItemsContainer,
                    [!props.show, styles.hide],
                    [props.upperUnfold, styles.dropdownItemsContainerUnfoldUpper],
                )}
                style={props.itemsContainerStyles}
            >
                {props.children}
            </ul>
        </Portal>
    );
};
