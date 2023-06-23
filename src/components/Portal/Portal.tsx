"use client";

import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
    mountElement?: HTMLElement;
};

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, mountElement }) => {
    const element = mountElement ?? document.body;

    return createPortal(children, element);
};
