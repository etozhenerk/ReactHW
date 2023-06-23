import { errorText } from "@common/consts";
import { FC, PropsWithChildren } from "react";

import { Spinner } from "@components/Spinner/Spinner";

import styles from "./PendingErrorGuard.module.css";

type PendingErrorGuardProps = {
    size?: number;
    isLoading: boolean;
    isError: boolean;
};

export const PendingErrorGuard: FC<PropsWithChildren<PendingErrorGuardProps>> = ({ children, isLoading, isError, size }) => {
    return (
        <>
            {isLoading ? (
                <div className={styles.containerPending}>
                    <Spinner size={size} />
                </div>
            ) : isError ? (
                <p className={styles.errorText}>{errorText}</p>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
