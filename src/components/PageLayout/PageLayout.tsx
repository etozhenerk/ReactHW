import { FC, PropsWithChildren } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import styles from "./PageLayout.module.css";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
