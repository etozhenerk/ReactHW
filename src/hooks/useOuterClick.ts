import { useEffect, useRef } from "react";

import { IsNode } from "@utils/isNode";

export const useOuterClick = <T extends HTMLElement>(callback: () => void, ignoreNodeId?: string): React.MutableRefObject<T> => {
    const innerRef = useRef<T>();

    useEffect(() => {
        const outerClick = (event: MouseEvent) => {
            const target = event.target;
            const block = document.getElementById(ignoreNodeId);
            const path = event.composedPath();

            if (innerRef.current && IsNode(target) && !innerRef.current.contains(target) && !path.includes(block)) {
                callback();
            }
        };

        document.addEventListener("mousedown", outerClick);
        return () => {
            document.removeEventListener("mousedown", outerClick);
        };
    }, [innerRef]);

    return innerRef;
};
