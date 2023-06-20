import React from "react";

import { Node } from "./Node";

import styles from "./TreeSlider.style.css";

export type TreeNode = {
    name: string;
    id: string;
    isSelected: boolean;
    counter?: number;
    isUnfolded?: boolean;
    nodes: TreeNode[];
    onClick?: () => void;
};

export type TreeSliderProps = {
    node: TreeNode;
    withBorder?: boolean;
    hideWithEmptyNodes?: boolean;
};

export const TreeSlider: React.FC<TreeSliderProps> = (props) => {
    const showEmptyRootNode = props.hideWithEmptyNodes ? props.node.nodes.length !== 0 : true;

    return (
        <div className={styles.container}>
            {showEmptyRootNode && <Node node={props.node} depth={0} withBorder={props.withBorder ?? false} />}
        </div>
    );
};
