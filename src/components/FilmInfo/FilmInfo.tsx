import Image from "next/image";
import { FC } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { CounterButtons } from "@components/CounterButtons/CounterButtons";

import { InfoItem } from "./InfoItem/InfoItem";

import styles from "./FilmInfo.module.css";

export const FilmInfo: FC = () => {
    return (
        <BlockWrapper className={styles.container}>
            <Image className={styles.image} src="/test.jpg" width={400} height={500} alt="image" />
            <div className={styles.info}>
                <h2 className={styles.name}>{"Властелин колец: Братство кольца"}</h2>
                <div className={styles.items}>
                    <InfoItem label="Жанр:" text="Фэнтези" />
                    <InfoItem label="Год выпуска:" text="2001" />
                    <InfoItem label="Рейтинг:" text="8" />
                    <InfoItem label="Режиссер:" text="Питер Джексон" />
                </div>
                <CounterButtons />
            </div>
            <div className={styles.description}>
                <h3 className={styles.title}>{"Описание"}</h3>
                <p className={styles.text}>
                    {
                        "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил."
                    }
                </p>
            </div>
        </BlockWrapper>
    );
};
