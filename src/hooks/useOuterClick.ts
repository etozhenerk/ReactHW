import { assertIsNode } from "@common/consts";
import { useEffect, useRef } from "react";

export const useOuterClick = <T extends HTMLElement>(callback: () => void): React.MutableRefObject<T> => {
    const innerRef = useRef<T>();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;
            assertIsNode(target);
            if (innerRef.current && !innerRef.current.contains(target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [innerRef]);

    return innerRef;
};
