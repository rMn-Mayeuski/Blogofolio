import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import styles from "../BurgerMenu/BurgerMenu.module.scss";
import avatar from "../../../img/Tomas.jpg";
import icoDark from "../../../img/Dark.svg";
import icoSun from "../../../img/Sun.svg";
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenuBtnThemSwitch from './BurgerMenuBtnThemSwitch/BurgerMenuBtnThemSwitch';
import { Route, Routes } from 'react-router-dom';


interface MenuСondition {
    active: any;
    setActive: any;
}

const BurgerMenu: React.FC<MenuСondition> = ({active, setActive}) => {
    return (
        <div 
        className={active ? styles.burgerMenuActive : styles.burgerMenu}
        onClick={() => setActive(false)}>
            <div className={styles.burgerMenuContent} onClick={e => e.stopPropagation()}>
                <UserInfo  name='Raman' lastName='Mayeuski' avatar={avatar}/>
                
                    <BurgerMenuBtn to='/addpost' title='Add post'/>
                    <BurgerMenuBtn to='/home' title='Home'/>
                
                <div className={styles.burgerMenuThemSwitch}>
                    <BurgerMenuBtnThemSwitch ico={icoSun}/>
                    <BurgerMenuBtnThemSwitch ico={icoDark}/>
                </div>
                <BurgerMenuBtn to='/addpost' title='Log Out' background='#E8E8E8'/>
            </div>
        </div>
    );
};

export default BurgerMenu;


