import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import styles from "../BurgerMenu/BurgerMenu.module.scss";
import avatar from "../../../img/Tomas.jpg";
import icoDark from "../../../img/Dark.svg";
import icoSun from "../../../img/Sun.svg";
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenuBtnThemSwitch from './BurgerMenuBtnThemSwitch/BurgerMenuBtnThemSwitch';
import { useTheme } from '../../../provider/ThemeProvider';
import { Theme } from '../../../context/ThemeContext';


interface MenuСondition {
    active: any;
    setActive: any;
}

const BurgerMenu: React.FC<MenuСondition> = ({active, setActive}) => {

    const theme = useTheme();

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    return (
        <div 
        className={active ? styles.burgerMenuActive : styles.burgerMenu}
        onClick={() => setActive(!false)}>
            <div className={styles.burgerMenuContent} onClick={e => e.stopPropagation()}>

                <div className={styles.burgerMenuContentTop}>
                    <div className={styles.burgerMenuUserInfo}>
                        <UserInfo  name='Guest' lastName='' avatar={avatar}/>
                    </div>
                    <BurgerMenuBtn to='/addpost' title='Add post'/>
                    <BurgerMenuBtn to='/home' title='Home'/>
                </div>
                
                <div className={styles.burgerMenuContentBottom}>
                    <div className={styles.burgerMenuThemSwitch} onClick={changeTheme}>
                        <BurgerMenuBtnThemSwitch ico={icoSun}/>
                        <BurgerMenuBtnThemSwitch ico={icoDark}/>
                    </div>
                    <BurgerMenuBtn to='/signin' title='Sign In'/>
                </div>

            </div>
        </div>
    );
};

export default BurgerMenu;


