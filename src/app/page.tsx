"use client";

import { PageLayout } from "@/components/PageLayout/PageLayout";

import styles from "./page.module.css";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    return (
        <PageLayout>
            <div className={styles.container}>{111}</div>
        </PageLayout>
    );
}
