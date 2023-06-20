declare namespace DropdownStyleCssNamespace {
    export interface IDropdownStyleCss {
        container: string;
        containerPending: string;
        pendingWrap: string;
        selectedText: string;
    }
}

declare const DropdownStyleCssModule: DropdownStyleCssNamespace.IDropdownStyleCss;

export = DropdownStyleCssModule;
