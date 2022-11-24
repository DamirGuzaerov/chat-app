import {IInputProps} from "../../../types";
import {useState} from "react";
import styles from "./input.module.sass"

export const Input = ({name, type,placeholder}: IInputProps) => {
    const [value,setValue] = useState<string>("")
    return (
        <>
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
        </>
    )
}