import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

import { useOuterClick } from "./useOuterClick";

export const useShowPortalBlock = (): {
    blockRef: React.MutableRefObject<HTMLDivElement>;
    show: boolean;
    switchShow: () => void;
    blockStyles: CSSProperties;
} => {
    const [show, setShow] = useState<boolean>(false);
    const [blockStyles, setBlockStyles] = useState<CSSProperties>(null);

    const switchShow = useCallback(() => setShow((prev) => !prev), []);

    const blockRef = useOuterClick<HTMLDivElement>(() => setShow(false));

    useEffect(() => {
        const bounding = blockRef.current.getBoundingClientRect();
        const elementHeight = bounding.height;
        const left = bounding.left;
        const top = bounding.top + elementHeight + 4;
        const minWidth = bounding.width;
        const width = bounding.width;

        if (top > 0 && left > 0) {
            setBlockStyles((prev) => ({ ...prev, top, left, minWidth, width: prev?.width ?? width }));
        }
    }, [show]);

    return {
        blockRef,
        show,
        switchShow,
        blockStyles,
    };
};
