import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { TMouseEvent } from "@common/types";
import { styler } from "@utils/styler";

import { CheckIcon } from "../../../../../Icons@UI-kit/CheckIcon";
import { Indent } from "../Indent";
import { TreeNode } from "../TreeSlider";

import sliderStyles from "../CSSTransition.style.css";
import styles from "./Node.style.css";

type NodeProps = {
    node: TreeNode;
    depth: number;
    withBorder: boolean;
};

export const Node: React.FC<NodeProps> = (props) => {
    const [isUnfolded, setIsUnfolded] = useState<boolean>(props.node.isUnfolded ?? false);

    const nodeIndent = `${25 * props.depth}px`;
    const nodeHasChildren = props.node.nodes.length > 0;
    const isRootNode = props.depth === 0;
    const isNodeWithoutChildren = !nodeHasChildren && !isRootNode;

    const hasNodeSelectedChildren = (node: TreeNode): boolean => {
        return node.nodes.reduce((acc, currentNode) => {
            return node.nodes.length > 0 ? acc || hasNodeSelectedChildren(currentNode) : acc || currentNode.isSelected;
        }, node.isSelected);
    };

    useEffect(() => {
        if (!isRootNode) {
            setIsUnfolded(props.node.isUnfolded);
        }
    }, [props.node.isUnfolded, props.node]);

    useEffect(() => {
        if (!isRootNode && !props.node.isUnfolded) {
            setIsUnfolded(hasNodeSelectedChildren(props.node));
        }
        if (isRootNode) {
            setIsUnfolded(true);
        }
    }, [props.node, props.depth]);

    const onArrowClick = (e: TMouseEvent<HTMLSpanElement>): void => {
        e.stopPropagation();

        setIsUnfolded((prev) => !prev);
    };

    const onNodeClick = (e: TMouseEvent<HTMLDivElement>, node: TreeNode): void => {
        e.stopPropagation();
        if (isRootNode || node.id === null) {
            return;
        }
        props.node.onClick?.();
    };

    return (
        <>
            <div
                className={styler(
                    styles.node,
                    [isNodeWithoutChildren && !props.node.isSelected, styles.nodeWithoutArrow],
                    [isNodeWithoutChildren && props.node.isSelected, styles.nodeSelectedWithoutArrow],
                    [props.node.id === null, styles.nodeNotSelectable],
                )}
                style={{ paddingLeft: nodeIndent }}
                onClick={(e) => onNodeClick(e, props.node)}
            >
                {props.withBorder && <Indent type={"node"} depth={props.depth} />}
                {nodeHasChildren && (
                    <span className={styles.arrowWrap} onClick={onArrowClick}>
                        <span className={styler(styles.arrow, [isUnfolded, styles.arrowUnfolded])} />
                    </span>
                )}
                <p
                    className={styler(
                        styles.nodeName,
                        [props.depth > 0, styles.nodeNameNested],
                        [props.node.isSelected, styles.nodeNameSelected],
                    )}
                    title={props.node.name}
                >
                    {props.node.name}
                </p>
                {props.node.isSelected && (
                    <span>
                        <CheckIcon width={14} height={14} color={"#000"} />
                    </span>
                )}
            </div>

            {props.node.nodes.map((node, i) => (
                <CSSTransition key={node.name} unmountOnExit in={isUnfolded} timeout={150} classNames={sliderStyles}>
                    <Node key={i} node={node} depth={props.depth + 1} withBorder={props.withBorder} />
                </CSSTransition>
            ))}
        </>
    );
};
