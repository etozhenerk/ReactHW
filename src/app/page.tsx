"use client";

import { Plus } from "@icons/Plus";
import { FC } from "react";

import { Button } from "@components/Button/Button";
import { Dropdown } from "@components/Dropdowns/Dropdown@UI-kit/Dropdown";
import { FilmCard } from "@components/FilmCard/FilmCard";
import { Input } from "@components/Input/Input";
import { Portal } from "@components/Portal/Portal";

import { useCreateNodeWithId } from "@hooks/useCreateNodeWithId";

import styles from "./page.module.css";

const Home: FC = () => {
    const element = useCreateNodeWithId("drop");
    return (
        <div className={styles.container}>
            <Button disabled={false} theme={"primary"} onClick={() => {}}>
                {"Да"}
            </Button>
            <Button disabled={false} theme={"secondary"} onClick={() => {}}>
                {"Нет"}
            </Button>
            <Button disabled={false} theme={"primarySmall"} onClick={() => {}}>
                <Plus height={9} width={9} color={"var(--color-white)"} />
            </Button>
            <Button disabled={true} theme={"primarySmall"} onClick={() => {}}>
                <Plus height={9} width={9} color={"var(--color-white)"} />
            </Button>
            <Input value="" onChange={(value) => console.log(value)} placeholder="test" />
            <FilmCard />
            <FilmCard />
            <Portal mountElement={element}></Portal>
            <Dropdown selectedValue="1234">
                <div>
                    <span>{123}</span>
                </div>
            </Dropdown>
        </div>
    );
};

export default Home;
