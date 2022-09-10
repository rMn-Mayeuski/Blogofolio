import React from 'react';
import styles from "./BurgerMenuBtn.module.scss"

interface BurgerMenuBtn {
    title?: string;
    background?: string;
    width?: string;
    img?: string;
}

const BurgerMenuBtn: React.FC<BurgerMenuBtn> = ({title, background}) => {
    return (
        <button 
        className={styles.burgerMenuBtn}
        style={{background}}
        >
            {title}
        </button>
    );
};

export default BurgerMenuBtn;