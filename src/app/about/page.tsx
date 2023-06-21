import { aboutText } from "@common/consts";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";

import styles from "./page.module.css";

const About: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <h1 className={styles.title}>{"О нас"}</h1>
            {aboutText.map((text, i) => (
                <p key={i} className={styles.text}>
                    {text}
                </p>
            ))}
        </BlockWrapper>
    );
};

export default About;
