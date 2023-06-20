import { PageLayout } from "@/components/PageLayout/PageLayout";

import styles from "./page.module.css";

export default function Home() {
    return (
        <PageLayout>
            <div className={styles.container}>{111}</div>
        </PageLayout>
    );
}
