import React from "react";

import { styler } from "@utils/styler";

import styles from "./UnselectButton.style.css";

type UnselectButtonProps = {
    onClick: () => void;
    isSelected: boolean;
    title: string;
};

export const UnselectButton: React.FC<UnselectButtonProps> = (props) => {
    return (
        <>
            <button className={styler(styles.unselectButton, [props.isSelected, styles.unselectButtonSelected])} onClick={props.onClick}>
                {props.title}
            </button>
            <div className={styles.border} />
        </>
    );
};
