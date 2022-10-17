import React, { MouseEventHandler } from 'react';
import styles from "./MainFormBTN.module.scss";

interface MainFormBTN{
    text: string;
    onSubmit?: () => void;
}

const MainFormBTN: React.FC<MainFormBTN> = ({text, onSubmit}) => {
    return (
        <button type='button' className={styles.mainBtn} onClick={onSubmit}>
            {text}
        </button>
    );
};

export default MainFormBTN;