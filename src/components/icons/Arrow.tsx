import { FC } from "react";

import { IconBaseProps } from "./types";

export const Arrow: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 29.3334H19C26.24 29.3334 29.3333 26.2401 29.3333 19.0001V11.0001C29.3333 3.76008 26.24 0.666748 19 0.666748H11C3.75996 0.666748 0.666626 3.76008 0.666626 11.0001V19.0001C0.666626 26.2401 3.75996 29.3334 11 29.3334ZM2.66663 11.0001C2.66663 4.85341 4.85329 2.66675 11 2.66675H19C25.1466 2.66675 27.3333 4.85341 27.3333 11.0001V19.0001C27.3333 25.1467 25.1466 27.3334 19 27.3334H11C4.85329 27.3334 2.66663 25.1467 2.66663 19.0001V11.0001ZM14.2933 18.5868C14.4933 18.7868 14.7466 18.8801 14.9999 18.8801C15.2533 18.8801 15.5066 18.7868 15.7066 18.5868L20.4133 13.8801C20.7999 13.4934 20.7999 12.8534 20.4133 12.4668C20.0266 12.0801 19.3866 12.0801 19 12.4668L14.9999 16.4668L10.9999 12.4668C10.6133 12.0801 9.97328 12.0801 9.58662 12.4668C9.19995 12.8534 9.19995 13.4934 9.58662 13.8801L14.2933 18.5868Z"
            fill={disabled ? "var(--color-grey)" : color}
        />
    </svg>
);
