import React, { useState } from "react";

import { Dropdown, DropdownTheme } from "../Dropdown@UI-kit";
import { SearchFilter } from "./SearchFilter";
import { TreeNode, TreeSlider } from "./TreeSlider";
import { UnselectButton } from "./UnselectButton";
import { filterTreeNode } from "./utils";

type DropdownSingleFilterProps = {
    selectedItems: string[];
    node: TreeNode;
    maxSelectedItemLength?: number;
    disabled?: boolean;
    pending?: boolean;
    theme?: DropdownTheme;
    isValid?: boolean;
    unselectTitle?: string;
    onUnselectClick?: () => void;
    withSearchFilter?: boolean;
};

export const DropdownMultipleWithTree: React.FC<DropdownSingleFilterProps> = (props) => {
    const [filterQuery, setFilterQuery] = useState<string>("");

    const isValid = props.isValid ?? true;

    const getSelectedValue = (): string => {
        const currentSelectedKeyValue = props.selectedItems.length > 0 ? props.selectedItems.join(", ") : "Не выбрано";

        if (props.maxSelectedItemLength) {
            return currentSelectedKeyValue.length > props.maxSelectedItemLength
                ? `${currentSelectedKeyValue.slice(0, props.maxSelectedItemLength)}...`
                : currentSelectedKeyValue;
        }
        return currentSelectedKeyValue;
    };

    const getFilteredNode = (): TreeNode => ({ ...props.node, nodes: filterTreeNode(props.node.nodes, filterQuery) });

    return (
        <Dropdown
            selectedValue={getSelectedValue()}
            disabled={props.disabled || !props.node}
            theme={props.theme}
            itemsContainerStyles={{ maxHeight: "30vh" }}
            pending={props.pending}
            dropdownStyles={isValid ? {} : { borderColor: "var(--color-red-primary)" }}
        >
            {props.withSearchFilter && <SearchFilter filterQuery={filterQuery} setFilterQuery={setFilterQuery} />}
            {props.unselectTitle && (
                <UnselectButton onClick={props.onUnselectClick} isSelected={props.selectedItems.length === 0} title={props.unselectTitle} />
            )}
            {!props.disabled && props.node && <TreeSlider node={getFilteredNode()} hideWithEmptyNodes={props.withSearchFilter} />}
        </Dropdown>
    );
};
