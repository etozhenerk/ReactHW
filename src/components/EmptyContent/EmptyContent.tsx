import { Photo } from "@icons/Photo";
import { FC } from "react";

import styles from "./EmptyContent.module.css";

interface EmptyContentProps {
    text: string;
}

export const EmptyContent: FC<EmptyContentProps> = ({ text }) => (
    <div className={styles.container}>
        <Photo width={100} height={100} color="var(--color-grey)" />
        <p className={styles.text}>{text}</p>
    </div>
);
