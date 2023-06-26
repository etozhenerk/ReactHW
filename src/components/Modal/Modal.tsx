"use client";

import { FC, useCallback } from "react";

import { BlockWrapper } from "@components/BlockWrapper/BlockWrapper";
import { Button } from "@components/Button/Button";
import { Portal } from "@components/Portal";

import { modalsMountNodeId } from "@common/consts";
import { useCreateNodeWithId } from "@hooks/useCreateNodeWithId";
import { useHiddenOverfow } from "@hooks/useHiddenOverfow";
import { useOuterClick } from "@hooks/useOuterClick";
import { Close } from "@icons/Close";

import styles from "./Modal.module.css";

interface ModalProps {
    show: boolean;
    onSuccess: () => void;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ show, onSuccess, onClose }) => {
    const node = useCreateNodeWithId(modalsMountNodeId);

    const ref = useOuterClick(onClose);

    useHiddenOverfow([show]);

    const onButtonClick = useCallback(() => {
        onSuccess();
        onClose();
    }, []);

    return (
        <Portal mountElement={node}>
            <div className={styles.overflow}>
                <BlockWrapper className={styles.container} blockRef={ref}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>{"Удаление билета"}</h2>
                        <p className={styles.description}>{"Вы уверены, что хотите удалить билет?"}</p>
                        <Close onClick={onClose} className={styles.icon} width={16} height={16} color={"var(--color-gray-dark)"} />
                    </div>
                    <div className={styles.buttons}>
                        <Button theme="primary" onClick={onButtonClick}>
                            {"Да"}
                        </Button>
                        <Button theme="secondary" onClick={onClose}>
                            {"Нет"}
                        </Button>
                    </div>
                </BlockWrapper>
            </div>
        </Portal>
    );
};
