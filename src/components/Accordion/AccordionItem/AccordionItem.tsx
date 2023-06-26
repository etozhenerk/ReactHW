import classNames from "classnames";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import { useAccordionContext } from "@contexts/accordionContext";
import { Arrow } from "@icons/Arrow";

import styles from "./AccordionItem.module.css";

interface AccordionItemProps {
    id: number;
    question: string;
    answer: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({ id, question, answer }) => {
    const { activeItemId, switchActiveItemId } = useAccordionContext();

    const showAnswer = activeItemId === id;

    return (
        <BlockWrapper className={styles.container}>
            <h3 className={styles.question}>{question}</h3>
            <p className={classNames(styles.answer, { [styles.hidden]: !showAnswer })}>{answer}</p>
            <Arrow
                className={classNames(styles.icon, { [styles.active]: showAnswer })}
                onClick={() => switchActiveItemId(id)}
                width={32}
                height={32}
                color="var(--color-gray-dark)"
            />
        </BlockWrapper>
    );
};
