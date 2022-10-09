import React, { MouseEventHandler, ReactEventHandler, ReactNode, useEffect, useState } from 'react';
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
    change?: boolean
    onClick: MouseEventHandler;
}

const BurgerMenu: React.FC<MenuСondition> = (props) => {

    const theme = useTheme();

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    const handlerStylesBurgerMenu = props.change ? styles.burgerMenuActive : styles.burgerMenu;

    return (
        <div 
        className={handlerStylesBurgerMenu}
        onClick={props.onClick}>
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


