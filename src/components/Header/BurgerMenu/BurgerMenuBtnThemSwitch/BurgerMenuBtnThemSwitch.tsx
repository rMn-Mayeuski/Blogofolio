import React from 'react';
import styles from "./BurgerMenuBtnThemSwitch.module.scss"

interface ThemSwitchBtn {
    svg: any;
}

const BurgerMenuBtnThemSwitch: React.FC<ThemSwitchBtn> = ({svg}) => {
    return (
        <button className={styles.themSwitchBtn}>
            {svg}
        </button>
    );
};

export default BurgerMenuBtnThemSwitch;