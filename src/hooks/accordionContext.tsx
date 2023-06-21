import { FC, PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface AccordionContextValue {
    activeItemId: number;
    switchActiveItemId: (id: number) => void;
}

const AccordionContext = createContext<AccordionContextValue>(null);

export const useAccordionContext = (): AccordionContextValue => useContext(AccordionContext);

export const AccordionProvider: FC<PropsWithChildren> = ({ children }) => {
    const [activeItemId, setActiveItemId] = useState(0);

    const switchActiveItemId = useCallback((id: number) => setActiveItemId(id), []);

    return <AccordionContext.Provider value={{ activeItemId, switchActiveItemId }}>{children}</AccordionContext.Provider>;
};
