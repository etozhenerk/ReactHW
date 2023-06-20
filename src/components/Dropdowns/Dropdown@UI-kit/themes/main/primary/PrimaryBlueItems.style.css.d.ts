declare namespace PrimaryBlueStyleCssNamespace {
    export interface IPrimaryBlueStyleCss {
        container: string;
        selectedText: string;
    }
}

declare const PrimaryBlueStyleCssModule: PrimaryBlueStyleCssNamespace.IPrimaryBlueStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: PrimaryBlueStyleCssNamespace.IPrimaryBlueStyleCss;
};

export = PrimaryBlueStyleCssModule;
