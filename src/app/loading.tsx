import { FC } from "react";

import { Spinner } from "@components/Spinner/Spinner";

import styles from "./loading.module.css";

const Loading: FC = () => (
    <div className={styles.container}>
        <Spinner />
    </div>
);

export default Loading;
