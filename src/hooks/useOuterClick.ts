import { useEffect, useRef } from "react";

export const useOuterClick = <T extends HTMLElement>(callback: () => void, ignoreNodeIds?: string[]): React.MutableRefObject<T> => {
    const innerRef = useRef<T>();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;

            if (innerRef.current && !innerRef.current.contains(target as Node) && ignoreNodeIds.includes((target as Element).id)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [innerRef]);

    return innerRef; // convenience for client (doesn't need to init ref himself)
};
