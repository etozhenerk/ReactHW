import Image from "next/image";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { EmptyImage } from "@components/EmptyImage/EmptyImage";

import styles from "./Comment.module.css";

export const Comment: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <EmptyImage className={styles.photo} />
            <h3 className={styles.name}>{"Роман"}</h3>
            <p className={styles.comment}>
                {
                    "По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                }
            </p>
            <div className={styles.rating}>
                <span>{"Оценка: "}</span>
                <span className={styles.number}>{"8"}</span>
            </div>
        </BlockWrapper>
    );
};
