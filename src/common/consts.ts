import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const inter = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"], variable: "--font-roboto" });

export const sfProText = localFont({
    src: [
        {
            path: "../fonts/SFProText-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/SFProText-RegularItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../fonts/SFProText-Semibold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-sf-pro-text",
});
