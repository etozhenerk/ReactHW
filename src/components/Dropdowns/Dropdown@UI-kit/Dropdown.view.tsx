import React, { CSSProperties, PropsWithChildren } from "react";

import { styler } from "@utils/styler";

import { Spinner } from "../../Spinner";
import { DropdownTheme } from "./Dropdown";
import { DropdownItems } from "./DropdownItems";
import { themes } from "./themes";

import styles from "./Dropdown.style.css";
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
            className={styler(
                styles.container,
                themeStyles.container,
                [props.disabled, disabledStyles.containerDisabled],
                [props.pending, styles.containerPending],
            )}
            style={props.dropdownStyles}
            onClick={props.setShow}
        >
            {props.pending && (
                <span className={styles.pendingWrap}>
                    <Spinner size={1.5} />
                </span>
            )}
            <span className={styler(styles.selectedText, themeStyles.selectedText, [props.disabled, disabledStyles.selectedTextDisabled])}>
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
