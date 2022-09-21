import React, { FC } from 'react';
import styles from "./FormInput.module.scss";

export interface FormInputProps {
    label: string;
    placeholder: string;
    type: string;
    id: any;
    value?: string;
    onChange?: any;
}

const FormInput:FC<FormInputProps> = ({label, placeholder, id, type, value, onChange}) => {
    return (
        <div className={styles.inputConteiner}>
            <label htmlFor={id}>{label}</label>
            <input
            required 
            id={id} 
            value={value}
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}/> 
        </div>
    );
};

export default FormInput;