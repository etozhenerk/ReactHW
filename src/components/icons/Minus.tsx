import { FC } from "react";

import { IconBaseProps } from "./types";

export const Minus: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
    <svg width={width} height={height} viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path
            d="M24 1C24 1.26522 23.8946 1.51957 23.7071 1.70711C23.5196 1.89464 23.2652 2 23 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H23C23.2652 0 23.5196 0.105357 23.7071 0.292893C23.8946 0.48043 24 0.734784 24 1Z"
            fill={disabled ? "var(--color-grey)" : color}
        />
    </svg>
);
