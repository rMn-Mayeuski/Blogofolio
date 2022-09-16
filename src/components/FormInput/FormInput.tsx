import React, { FC } from 'react';
import styles from "./FormInput.module.scss";

interface FormInput {
    label: string;
    placeholder: string;
    type: string;
    id: any;
}

const FormInput:FC<FormInput> = ({label, placeholder, id, type}) => {
    return (
        <div className={styles.inputConteiner}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} /> 
        </div>
    );
};

export default FormInput;