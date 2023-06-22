import { CSSProperties, useEffect, useRef, useState } from "react";

import { useOuterClick } from "./useOuterClick";

export const useHotKeys = (): {
    blockRef: React.MutableRefObject<HTMLDivElement>;
    containerRef: React.MutableRefObject<HTMLDivElement>;
    showHotKeys: boolean;
    setShowHotKeys: React.Dispatch<React.SetStateAction<boolean>>;
    blockStyles: CSSProperties;
} => {
    const [showHotKeys, setShowHotKeys] = useState<boolean>(false);
    const [blockStyles, setBlockStyles] = useState<CSSProperties>(null);

    const blockRef = useOuterClick<HTMLDivElement>(() => setShowHotKeys(false));
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bounding = containerRef.current.getBoundingClientRect();
        let blockHeight = 0;
        let blockWidth = 0;

        if (blockRef.current) {
            const blockBounding = blockRef.current.getBoundingClientRect();
            blockHeight = blockBounding.height;
            blockWidth = blockBounding.width;
        }

        const left = bounding.left;
        const top = bounding.top - blockHeight - 10;
        const bottom = "auto";

        if (top > 0 && bottom === "auto" && left > 0) {
            setBlockStyles((prev) => ({ ...prev, top, left, bottom }));
        }
    }, [showHotKeys]);

    return {
        blockRef,
        containerRef,
        showHotKeys,
        setShowHotKeys,
        blockStyles,
    };
};
