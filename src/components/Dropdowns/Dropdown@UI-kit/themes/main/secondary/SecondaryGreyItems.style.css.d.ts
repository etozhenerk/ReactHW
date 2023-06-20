declare namespace SecondaryGreyStyleCssNamespace {
    export interface ISecondaryGreyStyleCss {
        container: string;
        selectedText: string;
    }
}

declare const SecondaryGreyStyleCssModule: SecondaryGreyStyleCssNamespace.ISecondaryGreyStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SecondaryGreyStyleCssNamespace.ISecondaryGreyStyleCss;
};

export = SecondaryGreyStyleCssModule;
