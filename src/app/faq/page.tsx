"use client";

import { FC } from "react";

import { Accordion } from "@components/Accordion/Accordion";
import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { faqData } from "@common/consts";

import styles from "./page.module.css";

const Faq: FC = () => {
    return (
        <section className={styles.container}>
            <BlockWrapper>
                <h1 className={styles.title}>{"Вопросы-ответы"}</h1>
            </BlockWrapper>
            <Accordion>
                {faqData.map((item, i) => (
                    <Accordion.AccordionItem key={i} id={i} {...item} />
                ))}
            </Accordion>
        </section>
    );
};

export default Faq;
