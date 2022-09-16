import React from 'react';
import styles from "./MainFormBTN.module.scss";

interface MainFormBTN{
    text: string;
}

const MainFormBTN: React.FC<MainFormBTN> = ({text}) => {
    return (
        <button className={styles.mainBtn} type='submit'>
            {text}
        </button>
    );
};

export default MainFormBTN;