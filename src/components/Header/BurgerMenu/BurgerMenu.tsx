import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import styles from "../BurgerMenu/BurgerMenu.module.scss";
import avatar from "../../../img/Tomas.jpg";
import icoDark from "../../../img/Dark.svg";
import icoSun from "../../../img/Sun.svg";
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenuBtnThemSwitch from './BurgerMenuBtnThemSwitch/BurgerMenuBtnThemSwitch';

interface MenuСondition {
    active: any;
    setActive: any;
}

const BurgerMenu: React.FC<MenuСondition> = ({active, setActive}) => {
    return (
        <div className={active ? styles.burgerMenuActive : styles.burgerMenu }>
            <UserInfo  name='Raman' lastName='Mayeuski' avatar={avatar}/>
            <BurgerMenuBtn title='Home'/>
            <BurgerMenuBtn title='Add post'/>
            <div className={styles.burgerMenuThemSwitch}>
                <BurgerMenuBtnThemSwitch ico={icoSun}/>
                <BurgerMenuBtnThemSwitch ico={icoDark}/>
            </div>
            <BurgerMenuBtn title='Log Out' background='#E8E8E8'/>
        </div>
    );
};

export default BurgerMenu;