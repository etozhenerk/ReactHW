import { FC, PropsWithChildren } from "react";

import styles from "./SelectWrapper.module.css";

interface SelectWrapperProps {
    label: string;
    htmlFor?: string;
}

export const SelectWrapper: FC<PropsWithChildren<SelectWrapperProps>> = ({ children, label, htmlFor }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={htmlFor}>
                {label}
            </label>
            {children}
        </div>
    );
};
