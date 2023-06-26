import { FC, PropsWithChildren } from "react";

import { AccordionProvider } from "@contexts/accordionContext";

import { AccordionItem } from "./AccordionItem/AccordionItem";

import styles from "./Accordion.module.css";

interface AccordionComposition {
    AccordionItem?: typeof AccordionItem;
}

export const Accordion: FC<PropsWithChildren> & AccordionComposition = ({ children }) => {
    return (
        <section className={styles.container}>
            <AccordionProvider>{children}</AccordionProvider>
        </section>
    );
};

Accordion.AccordionItem = AccordionItem;
