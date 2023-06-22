import { useEffect, useState } from "react";
import { unmountComponentAtNode } from "react-dom";

export const useCreateNodeWithId = (id: string): HTMLElement => {
    const [mountNode, setMountedNode] = useState<HTMLElement>(document.getElementById(id));

    useEffect(() => {
        if (!mountNode) {
            const node = document.createElement("div");
            node.setAttribute("id", id);
            document.body.appendChild(node);
            setMountedNode(node);

            return () => {
                document.body.removeChild(node);
            };
        }
    }, []);

    return mountNode;
};
