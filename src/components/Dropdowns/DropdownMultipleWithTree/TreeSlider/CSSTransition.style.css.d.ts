declare namespace CssTransitionStyleCssNamespace {
    export interface ICssTransitionStyleCss {
        enter: string;
        enterActive: string;
        exit: string;
        exitActive: string;
    }
}

declare const CssTransitionStyleCssModule: CssTransitionStyleCssNamespace.ICssTransitionStyleCss;

export = CssTransitionStyleCssModule;
