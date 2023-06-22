import React, { CSSProperties, useEffect, useMemo, useState } from "react";

import { useOuterClick } from "@hooks/useOuterClick";

import { DropdownView } from "./Dropdown.view";
import { themes } from "./themes";

export type DropdownTheme = keyof typeof themes;

type DropdownProps = {
    children: React.ReactNode;
    selectedValue: string | React.ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
    preloadOnOpen?: boolean;
    disabled?: boolean;
    pending?: boolean;
    upperUnfold?: boolean;
    dropdownStyles?: CSSProperties;
    itemsContainerStyles?: CSSProperties;
    theme?: DropdownTheme;
    itemsContainerMountNodeId?: string;
};

const mountNodeId = "dropdowns";

export const Dropdown: React.FC<DropdownProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);
    const [initLoad, setInitLoad] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [itemsContainerStyles, setItemsContainerStyles] = useState<CSSProperties>(props.itemsContainerStyles);

    const disabled = props.disabled || props.pending;
    const itemsContainerMountNodeId = props.itemsContainerMountNodeId ?? mountNodeId;

    const wrapperRef = useOuterClick<HTMLDivElement>(() => {
        setShow(false);
    });
    const onOpenDelay = useMemo(() => (props.preloadOnOpen ? 100 : 50), [props.preloadOnOpen]);

    useEffect(() => {
        const bounding = wrapperRef.current.getBoundingClientRect();
        const elementHeight = bounding.height;
        const height = window.innerHeight;
        const left = bounding.left;
        const top = props.upperUnfold ? "auto" : bounding.top + elementHeight * 1.15;
        const bottom = props.upperUnfold ? height - bounding.top + elementHeight * 0.15 : "auto";
        const minWidth = bounding.width;
        const width = bounding.width;

        if (
            ((typeof top === "number" && top > 0) || top === "auto") &&
            ((typeof bottom === "number" && bottom > 0) || bottom === "auto") &&
            left > 0
        ) {
            setItemsContainerStyles((prev) => ({ ...prev, top, left, bottom, minWidth, width: prev?.width ?? width }));
        }
    }, [show]);

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, []);

    const handleSetShow = (): void => {
        if (disabled) {
            return;
        }
        if (show === false) {
            props.onOpen?.();
            const id = setTimeout(() => setShow(!show), onOpenDelay);
            setTimeoutId(id);
        } else {
            setShow(!show);
        }
    };

    useEffect(() => setInitLoad(true), []);

    useEffect(() => {
        if (disabled) {
            return;
        }

        if (initLoad && !show) {
            props.onClose?.();
        }
        if (initLoad && show && !props.preloadOnOpen) {
            props.onOpen?.();
        }
    }, [show]);

    return (
        <DropdownView
            ref={wrapperRef}
            show={show}
            setShow={handleSetShow}
            selectedValue={props.selectedValue}
            disabled={disabled}
            pending={props.pending ?? false}
            upperUnfold={props.upperUnfold ?? false}
            dropdownStyles={props.dropdownStyles}
            itemsContainerStyles={itemsContainerStyles}
            theme={props.theme ?? "secondary-grey"}
            itemsContainerMountNodeId={itemsContainerMountNodeId}
        >
            {props.children}
        </DropdownView>
    );
};
