import React from 'react';
import styles from "./BurgerMenuBtnThemSwitch.module.scss"

interface ThemSwitchBtn {
    ico?: any;
}

const BurgerMenuBtnThemSwitch: React.FC<ThemSwitchBtn> = ({ico}) => {
    return (
        <button className={styles.themSwitchBtn}>
            <img src={ico} alt="logo" />
        </button>
    );
};

export default BurgerMenuBtnThemSwitch;