import classNames from "classnames";
import React from "react";

import { Spinner } from "@components/Spinner/Spinner";

import { dropdownsMountNodeId } from "@common/consts";
import { useShowPortalBlock } from "@hooks/useShowPortalBlock";
import { Arrow } from "@icons/Arrow";

import { DropdownItems } from "./DropdownItems/DropdownItems";

import styles from "./Dropdown.module.css";

interface DropdownProps {
    items: Record<string, string>;
    selectedKey: string;
    setSelectedValue: (key: string) => void;
    placeholder: string;
    isLoading: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ selectedKey, items, placeholder, isLoading, setSelectedValue }) => {
    const { blockRef, show, switchShow, blockStyles } = useShowPortalBlock(dropdownsMountNodeId);

    return (
        <div ref={blockRef} className={styles.container} onClick={switchShow}>
            <div className={classNames(styles.text, { [styles.opened]: show })}>
                {items[selectedKey] ? <span>{items[selectedKey]}</span> : <span className={styles.placeholder}>{placeholder}</span>}
                {isLoading ? (
                    <Spinner size={18} />
                ) : (
                    <Arrow
                        className={classNames(styles.icon, { [styles.active]: show })}
                        width={18}
                        height={18}
                        color="var(--color-gray-dark)"
                    />
                )}
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
