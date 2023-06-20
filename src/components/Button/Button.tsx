import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    theme: "primary" | "secondary" | "primarySmall";
    disabled?: boolean;
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, theme, disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(styles[theme], styles.container, { [styles.disabled]: disabled })}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
