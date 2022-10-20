import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./BurgerMenuBtn.module.scss"

interface BurgerMenuBtn {
    title?: string;
    background?: string;
    width?: string;
    img?: string;
    to: string;
}

const BurgerMenuBtn: React.FC<BurgerMenuBtn> = ({title, background, to}) => {
    return (
        <button
            className={styles.burgerMenuBtn} 
            style={{background}}
        >
            <NavLink to={to}>{title}</NavLink>
        </button>
    );
};

export default BurgerMenuBtn;