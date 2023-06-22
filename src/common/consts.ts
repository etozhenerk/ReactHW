import { Roboto } from "next/font/google";
import localFont from "next/font/local";

import { Faq } from "./types";

export const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"], variable: "--font-roboto" });

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

export const aboutText = [
    "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    "был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их создателях, новости кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание сеансов в кинотеатрах, ТВ-программу и другие разделы.",
    "Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время).",
];

export const faqData: Faq[] = [
    {
        question: "Что такое Билетопоиск?",
        answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    },
    {
        question: "Какой компании принадлежит Билетопоиск?",
        answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    },
    {
        question: "Как купить билет на Билетопоиск?",
        answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    },
    {
        question: "Как оставить отзыв на Билетопоиск?",
        answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    },
];

export function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
        throw new Error(`Node expected`);
    }
}
