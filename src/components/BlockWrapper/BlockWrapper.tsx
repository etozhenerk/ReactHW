import classNames from "classnames";
import { FC, MutableRefObject, PropsWithChildren } from "react";

import styles from "./BlockWrapper.module.css";

interface BlockWrapperProps {
    className?: string;
    blockRef?: MutableRefObject<HTMLElement>;
}

export const BlockWrapper: FC<PropsWithChildren<BlockWrapperProps>> = ({ children, className, blockRef }) => {
    return (
        <section ref={blockRef} className={classNames(styles.container, className)}>
            {children}
        </section>
    );
};
