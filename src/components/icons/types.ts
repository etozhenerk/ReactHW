import React from "react";

export interface IconBaseProps extends React.ComponentPropsWithoutRef<"svg"> {
    /**
     * Цвет иконки
     * @default #999
     */
    color: string;

    /**
     * Ширина иконки
     * @default 16
     */
    width: number;

    /**
     * Высота иконки
     * @default 16
     */
    height: number;

    /**
     * Управление заблокированным состоянием иконки
     * @default false
     */
    disabled?: boolean;

    /**
     * Текст при наведении мышки
     */
    title?: string;
}
