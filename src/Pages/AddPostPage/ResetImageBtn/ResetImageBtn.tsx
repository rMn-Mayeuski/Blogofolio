import React, { FC, MouseEventHandler } from 'react';
import styles from "./ResetImageBtn.module.scss"

interface IResetImageBtnProps {
    onClick?: MouseEventHandler
}

const ResetImageBtn: FC<IResetImageBtnProps> = ({onClick= () => {}}) => {
    return (
        <button 
            className={styles.resetImageBtn}
            type='button'
            onClick={onClick}>
            Reset
        </button>
    );
};

export default ResetImageBtn;