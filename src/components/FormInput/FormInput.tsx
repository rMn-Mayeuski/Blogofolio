import React, { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import ResetImageBtn from '../../Pages/AddPostPage/ResetImageBtn/ResetImageBtn';
import styles from "./FormInput.module.scss";

export interface InputError {
    text: string | null
    error: boolean
}

export interface FormInputProps {
    label: string;
    placeholder: string;
    type: string;
    id: string;
    value?: string;
    error?: InputError;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFileReset?: MouseEventHandler<HTMLSpanElement>;
}

const FormInput:FC<FormInputProps> = ({label, placeholder, id, type, value, onChange, error, onFileReset}) => {
    return (
        <div className={styles.inputConteiner}>
            <label >{label}</label>
            <input
            id={id}
            required 
            value={value}
            type={type}
            placeholder={placeholder} 
            onChange={onChange}
            className={`${styles.inputConteinerField} ${error?.error ? styles.error : ""}`}
            /> 
            {type === "file" && !!value &&
                <ResetImageBtn onClick={onFileReset}/>
            }
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default FormInput;