"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";

import styles from "./Spinner.module.css";

type SpinnerProps = {
    size?: number;
    delay?: number;
};

export const Spinner: React.FC<SpinnerProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);

    const size = props.size ?? 100;

    useEffect(() => {
        const timerId = setTimeout(() => setShow(true), props.delay ?? 100);
        return () => clearTimeout(timerId);
    }, [props.delay]);

    return <span className={classNames(styles.loader, { [styles.show]: show })} style={{ width: `${size}px`, height: `${size}px` }} />;
};
