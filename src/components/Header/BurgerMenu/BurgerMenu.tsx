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
                        <BurgerMenuBtnThemSwitch 
                            svg={ <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.552 4 13 3.552 13 3V1C13 0.448 12.552 0 12 0C11.448 0 11 0.448 11 1V3C11 3.552 11.448 4 12 4ZM12 16C9.794 16 8 14.206 8 12C8 9.794 9.794 8 12 8C14.206 8 16 9.794 16 12C16 14.206 14.206 16 12 16ZM12 6C8.691 6 6 8.691 6 12C6 15.309 8.691 18 12 18C15.309 18 18 15.309 18 12C18 8.691 15.309 6 12 6ZM11 21C11 20.447 11.448 20 12 20C12.552 20 13 20.447 13 21V23C13 23.553 12.552 24 12 24C11.448 24 11 23.553 11 23V21ZM4.93298 6.34722C5.12798 6.54222 5.38398 6.64022 5.63998 6.64022C5.89598 6.64022 6.15198 6.54222 6.34698 6.34722C6.73798 5.95622 6.73798 5.32422 6.34698 4.93322L4.92698 3.51322C4.53698 3.12222 3.90398 3.12222 3.51298 3.51322C3.12198 3.90422 3.12198 4.53622 3.51298 4.92722L4.93298 6.34722ZM17.6536 19.0674C17.2626 18.6764 17.2626 18.0444 17.6536 17.6534C18.0446 17.2624 18.6766 17.2624 19.0676 17.6534L20.4876 19.0734C20.8786 19.4644 20.8786 20.0964 20.4876 20.4874C20.2926 20.6824 20.0366 20.7804 19.7806 20.7804C19.5246 20.7804 19.2686 20.6824 19.0736 20.4874L17.6536 19.0674ZM4 12C4 11.448 3.552 11 3 11H1C0.448 11 0 11.448 0 12C0 12.552 0.448 13 1 13H3C3.552 13 4 12.552 4 12ZM21 11H23C23.553 11 24 11.448 24 12C24 12.552 23.553 13 23 13H21C20.447 13 20 12.552 20 12C20 11.448 20.447 11 21 11ZM4.93298 17.6534L3.51298 19.0734C3.12198 19.4644 3.12198 20.0964 3.51298 20.4874C3.70798 20.6824 3.96398 20.7804 4.21998 20.7804C4.47598 20.7804 4.73198 20.6824 4.92698 20.4874L6.34698 19.0674C6.73798 18.6764 6.73798 18.0444 6.34698 17.6534C5.95598 17.2624 5.32398 17.2624 4.93298 17.6534ZM19.0676 6.34722C18.8726 6.54222 18.6166 6.64022 18.3606 6.64022C18.1046 6.64022 17.8486 6.54222 17.6536 6.34722C17.2626 5.95622 17.2626 5.32422 17.6536 4.93322L19.0736 3.51322C19.4646 3.12222 20.0966 3.12222 20.4876 3.51322C20.8786 3.90422 20.8786 4.53622 20.4876 4.92722L19.0676 6.34722Z" fill="#313037"/>
                            </svg>
                            }
                            />
                        <BurgerMenuBtnThemSwitch 
                            svg={ <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.27767 4.43848C6.41967 5.47248 4.32467 8.08248 4.03367 11.2255C3.62867 15.6185 6.87167 19.5215 11.2647 19.9275C13.3867 20.1265 15.4677 19.4795 17.1127 18.1155C18.2237 17.1915 19.0477 16.0125 19.5247 14.6895C17.0557 15.5925 14.2557 15.2275 12.0467 13.5935C9.13667 11.4435 8.10667 7.67948 9.27767 4.43848ZM12.0178 21.9624C11.7068 21.9624 11.3938 21.9484 11.0808 21.9194C5.58982 21.4114 1.53582 16.5324 2.04282 11.0424C2.48582 6.24841 6.28682 2.44741 11.0808 2.00441C11.4678 1.96741 11.8498 2.16541 12.0438 2.50841C12.2368 2.85241 12.2108 3.27741 11.9768 3.59441C10.0098 6.25441 10.5748 10.0194 13.2348 11.9854C15.3688 13.5634 18.2358 13.5624 20.3678 11.9854C20.6848 11.7514 21.1098 11.7254 21.4538 11.9184C21.7968 12.1124 21.9948 12.4894 21.9588 12.8814C21.7128 15.5424 20.4458 17.9464 18.3908 19.6534C16.5788 21.1594 14.3438 21.9624 12.0178 21.9624Z" fill="#313037"/>
                            </svg>
                            }
                        />
                    </div>
                    <BurgerMenuBtn to='/signin' title='Sign In'/>
                </div>

            </div>
        </div>
    );
};

export default BurgerMenu;


