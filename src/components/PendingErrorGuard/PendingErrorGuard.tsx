import React from "react";

import { PendingErrorBaseProps } from "@common/types";

import { useIsFirstRender } from "../../common/hooks/useIsFirstRender";
import { Loader } from "../Loaders";
import { LoaderTheme } from "../Loaders/Loader/Loader";
import { Spinner } from "../Spinner";

import styles from "./PendingErrorGuard.style.css";

type PendingErrorGuardProps = {
    size?: number;
    showOnlyPending?: boolean;
    loader?: "spinner" | "loader";
    loaderTheme?: LoaderTheme;
} & PendingErrorBaseProps;

export const PendingErrorGuard: React.FC<PendingErrorGuardProps> = (props) => {
    const isFirstRender = useIsFirstRender();

    const loader = props.loader ?? "spinner";
    const loaderTheme = props.loaderTheme ?? "grey-dark";

    const renderLoader = (): JSX.Element =>
        loader === "spinner" ? <Spinner size={props.size} /> : <Loader scale={props.size} theme={loaderTheme} />;

    return (
        <>
            {props.pending ? (
                <div className={styles.containerPending}>{renderLoader()}</div>
            ) : props.error !== null ? (
                <p className={styles.errorText}>{props.showOnlyPending ? null : props.error}</p>
            ) : (
                <>{!isFirstRender && props.children}</>
            )}
        </>
    );
};
