import { useEffect } from "react";

export const useHiddenOverfow = <T>(deps: T[]) => {
    /*TODO: пофиксить */
    useEffect(() => {
        document.body.setAttribute("style", "overflow: hidden");

        return () => {
            document.body.removeAttribute("style");
        };
    }, [...deps]);
};
