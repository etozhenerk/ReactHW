declare namespace SecondaryGreyStyleCssNamespace {
    export interface ISecondaryGreyStyleCss {
        container: string;
        selectedText: string;
    }
}

declare const SecondaryGreyStyleCssModule: SecondaryGreyStyleCssNamespace.ISecondaryGreyStyleCss;

export = SecondaryGreyStyleCssModule;
