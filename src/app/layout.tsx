import "./globals.css";
import { roboto, sfProText } from "@common/consts";
import classNames from "classnames";

import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";

import styles from "./layout.module.css";

export const metadata = {
    title: "React База",
    description: "Запомните - Реакт это база.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={classNames(roboto.variable, sfProText.variable, styles.container)}>
                <Header />
                <main className={styles.content}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
