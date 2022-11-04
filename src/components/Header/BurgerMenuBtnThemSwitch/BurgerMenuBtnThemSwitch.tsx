import React, { MouseEventHandler } from 'react';
import styles from "./BurgerMenuBtnThemSwitch.module.scss"

interface ThemSwitchBtn {
    svg: any;
    onClick?: MouseEventHandler,
}

const BurgerMenuBtnThemSwitch: React.FC<ThemSwitchBtn> = ({svg, onClick}) => {
    return (
        <button className={styles.themSwitchBtn} onClick={onClick}>
            {svg}
        </button>
    );
};

export default BurgerMenuBtnThemSwitch;