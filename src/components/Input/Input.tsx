import React, { ChangeEvent, FC, useCallback } from "react";

import styles from "./Input.module.css";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    disabled?: boolean;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder, disabled }) => {
    const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), [onChange]);

    return <input className={styles.container} disabled={disabled} value={value} placeholder={placeholder} onChange={onChangeInput} />;
};
