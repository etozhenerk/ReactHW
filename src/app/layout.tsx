import "./globals.css";
import classNames from "classnames";

import { Footer } from "@components/Footer/Footer";
import { Header } from "@componentsUsingStore/Header/Header";

import { StoreProvider } from "@store/StoreProvider";

import { roboto, sfProText } from "../fonts";

import styles from "./layout.module.css";

export const metadata = {
    title: "React База",
    description: "Запомните - Реакт это база. Запомнили? Забудьте.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={classNames(roboto.variable, sfProText.variable, styles.container)}>
                <StoreProvider>
                    <Header />
                    <main className={styles.content}>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
