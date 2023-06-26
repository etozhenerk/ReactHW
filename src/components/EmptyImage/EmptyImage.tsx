import classNames from "classnames";
import { FC } from "react";

import { Photo } from "@icons/Photo";

import styles from "./EmptyImage.module.css";

interface EmptyImageProps {
    className?: string;
}

export const EmptyImage: FC<EmptyImageProps> = ({ className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            <Photo width={26} height={22} color="var(--color-grey)" />
        </div>
    );
};
