import { Arrow } from "@icons/Arrow";
import classNames from "classnames";
import React from "react";

import { useShowPortalBlock } from "@hooks/useShowPortalBlock";

import { DropdownItems } from "./DropdownItems/DropdownItems";

import styles from "./Dropdown.module.css";

interface DropdownProps {
    items: Record<string, string>;
    selectedKey: string;
    setSelectedValue: (key: string) => void;
    placeholder: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ selectedKey, items, placeholder, setSelectedValue }) => {
    const { blockRef, show, switchShow, blockStyles } = useShowPortalBlock();

    return (
        <div ref={blockRef} className={styles.container} onClick={switchShow}>
            <div className={classNames(styles.text, { [styles.opened]: show })}>
                {items[selectedKey] ? <span>{items[selectedKey]}</span> : <span className={styles.placeholder}>{placeholder}</span>}
                <Arrow
                    className={classNames(styles.icon, { [styles.active]: show })}
                    width={18}
                    height={18}
                    color="var(--color-gray-dark)"
                />
            </div>
            {show && (
                <DropdownItems
                    show={show}
                    itemsContainerStyles={blockStyles}
                    items={items}
                    selectedKey={selectedKey}
                    setSelectedValue={setSelectedValue}
                />
            )}
        </div>
    );
};
