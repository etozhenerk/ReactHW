declare namespace NodeStyleCssNamespace {
    export interface INodeStyleCss {
        arrow: string;
        arrowUnfolded: string;
        arrowWrap: string;
        node: string;
        nodeCounter: string;
        nodeName: string;
        nodeNameNested: string;
        nodeNameSelected: string;
        nodeNotSelectable: string;
        nodeSelectedWithoutArrow: string;
        nodeWithoutArrow: string;
        text: string;
    }
}

declare const NodeStyleCssModule: NodeStyleCssNamespace.INodeStyleCss;

export = NodeStyleCssModule;
