import React, { FC } from 'react';
import styles from "./MinorFormBTN.module.scss";

interface MinorFormBTN {
    text: string;
    colorText?: string;
}

const MinorFormBTN: React.FC<MinorFormBTN> = ({text, colorText}) => {
    return (
        <button className={styles.minorBtn} type='button'>
            {text} <span>{colorText}</span>
        </button>
    );
};

export default MinorFormBTN;