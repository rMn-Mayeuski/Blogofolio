import React, { ChangeEventHandler, FC } from 'react';
import { TextareaError } from '../AddPost';
import styles from "./TextArea.module.scss";

export interface TextareaProps {
    title: string
    id: string
    value?: string
    error?: TextareaError
    disabled?: boolean
    required: boolean
    placeholder?: string
    name?: string
    className?: string
    cols?: number
    rows?: number
    minLength?: number
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea: FC<TextareaProps> = ({
    title= "",
    value= "",
    id= "",
    placeholder= "",
    name= "",
    className= "",
    error= {text: null, error: false},
    disabled= false,
    required,
    onChange,
    cols,
    rows,
    minLength
}) => {
    return (
        <div className={styles.textArea}>
            <label htmlFor={id}>{title}</label>
            <textarea 
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                minLength={minLength}
                className={`${styles.textAreaField} ${error?.error ? styles.error : ""}`}
                >
            </textarea>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default TextArea;