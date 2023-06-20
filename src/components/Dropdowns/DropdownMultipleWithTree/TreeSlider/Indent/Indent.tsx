import React from "react";

import styles from "./Indent.style.css";

type IndentProps = {
    depth: number;
    type: "node" | "leaf";
};

export const Indent: React.FC<IndentProps> = (props) => {
    const startBorderCount = props.type === "node" ? props.depth + 1 : props.depth + 2;
    const getBorderIndent = (index: number): string => `${25 * props.depth - 5 - index * 25}px`;

    return (
        <>
            {[...Array(startBorderCount)].map((_, index) => (
                <div key={index} className={styles.border} style={{ left: getBorderIndent(index) }} />
            ))}
        </>
    );
};
