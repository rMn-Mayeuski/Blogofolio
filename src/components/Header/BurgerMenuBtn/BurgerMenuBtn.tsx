import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./BurgerMenuBtn.module.scss"

interface BurgerMenuBtn {
    to: string;
    title?: string;
    background?: string;
    width?: string;
    img?: string;
    onClick?: MouseEventHandler;
}

const BurgerMenuBtn: React.FC<BurgerMenuBtn> = ({title, background, to, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className={styles.burgerMenuBtn} 
            style={{background}}
        >
            <NavLink to={to}>{title}</NavLink>
        </button>
    );
};

export default BurgerMenuBtn;