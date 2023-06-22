import classNames from "classnames";
import React, { CSSProperties, PropsWithChildren } from "react";

import { DropdownTheme } from "./Dropdown";
import { DropdownItems } from "./DropdownItems/DropdownItems";
import { themes } from "./themes";

import styles from "./Dropdown.module.css";
import disabledStyles from "./themes/main/disabled/DisabledDropdown.style.css";

type DropdownViewProps = {
    show: boolean;
    setShow: () => void;
    selectedValue: React.ReactNode;
    disabled: boolean;
    pending: boolean;
    upperUnfold: boolean;
    dropdownStyles?: CSSProperties;
    itemsContainerStyles: CSSProperties;
    theme: DropdownTheme;
    itemsContainerMountNodeId: string;
};

export const DropdownView = React.forwardRef<HTMLDivElement, PropsWithChildren<DropdownViewProps>>((props, ref) => {
    const themeStyles = themes[props.theme];

    return (
        <div
            ref={ref}
            className={classNames(styles.container, themeStyles.container, {
                [disabledStyles.containerDisabled]: props.disabled,
                [styles.containerPending]: props.pending,
            })}
            style={props.dropdownStyles}
            onClick={props.setShow}
        >
            <span
                className={classNames(styles.selectedText, themeStyles.selectedText, {
                    [disabledStyles.selectedTextDisabled]: props.disabled,
                })}
            >
                {props.selectedValue}
            </span>
            {props.show && (
                <DropdownItems
                    show={props.show}
                    setShow={props.setShow}
                    upperUnfold={props.upperUnfold}
                    itemsContainerStyles={props.itemsContainerStyles}
                    itemsContainerMountNodeId={props.itemsContainerMountNodeId}
                >
                    {props.children}
                </DropdownItems>
            )}
        </div>
    );
});
