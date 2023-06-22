import { FC } from "react";

import styles from "./InfoItem.module.css";

interface InfoItemProps {
    label: string;
    text: string;
}

export const InfoItem: FC<InfoItemProps> = ({ label, text }) => {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <span>{text}</span>
        </div>
    );
};
