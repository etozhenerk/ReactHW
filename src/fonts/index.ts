import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"], variable: "--font-roboto" });

export const sfProText = localFont({
    src: [
        {
            path: "./SFProText/SFProText-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./SFProText/SFProText-RegularItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./SFProText/SFProText-Semibold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-sf-pro-text",
});
