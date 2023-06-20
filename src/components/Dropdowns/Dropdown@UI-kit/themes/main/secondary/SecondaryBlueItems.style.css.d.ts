declare namespace SecondaryBlueStyleCssNamespace {
    export interface ISecondaryBlueStyleCss {
        container: string;
        selectedText: string;
    }
}

declare const SecondaryBlueStyleCssModule: SecondaryBlueStyleCssNamespace.ISecondaryBlueStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SecondaryBlueStyleCssNamespace.ISecondaryBlueStyleCss;
};

export = SecondaryBlueStyleCssModule;
