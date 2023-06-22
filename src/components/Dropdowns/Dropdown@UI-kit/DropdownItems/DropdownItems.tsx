import classNames from "classnames";
import React, { CSSProperties, PropsWithChildren } from "react";

import { Portal } from "@components/Portal/Portal";

import { useCreateNodeWithId } from "@hooks/useCreateNodeWithId";

import styles from "./DropdownItems.module.css";

type DropdownItemsProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    upperUnfold: boolean;
    itemsContainerStyles: CSSProperties;
    itemsContainerMountNodeId: string;
};

export const DropdownItems: React.FC<PropsWithChildren<DropdownItemsProps>> = (props: PropsWithChildren<DropdownItemsProps>) => {
    const node = useCreateNodeWithId(props.itemsContainerMountNodeId);

    return (
        <Portal mountElement={node}>
            <ul
                className={classNames(styles.dropdownItemsContainer, {
                    [styles.hide]: !props.show,
                    [styles.dropdownItemsContainerUnfoldUpper]: props.upperUnfold,
                })}
                style={props.itemsContainerStyles}
            >
                {props.children}
            </ul>
        </Portal>
    );
};
