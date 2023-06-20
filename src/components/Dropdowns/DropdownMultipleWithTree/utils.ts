import { TreeNode } from "./TreeSlider";

export const filterTreeNode = (nodes: TreeNode[], query: string): TreeNode[] => {
    return nodes
        .map((node) => {
            const isNodeNameIncludesFilterQuery = node.name.toLowerCase().includes(query.toLowerCase());
            const filteredNodes = filterTreeNode(node.nodes, query);
            const isNodeHasNodes = filteredNodes.length !== 0;

            return isNodeNameIncludesFilterQuery || isNodeHasNodes
                ? { ...node, nodes: filteredNodes, isUnfolded: isNodeHasNodes && !!query }
                : null;
        })
        .filter(Boolean);
};
