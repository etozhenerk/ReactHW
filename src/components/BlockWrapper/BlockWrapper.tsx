import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import styles from "./BlockWrapper.module.css";

interface BlockWrapperProps {
    className?: string;
}

export const BlockWrapper: FC<PropsWithChildren<BlockWrapperProps>> = ({ children, className }) => {
    return <section className={classNames(styles.container, className)}>{children}</section>;
};
