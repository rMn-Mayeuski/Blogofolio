import React, { MouseEventHandler, useState } from 'react';
import styles from "./Header.module.scss"
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header: React.FC = () => {

    const [menuActive, setMenuActive] = useState(false);

    const burgerMenuActive = () => setMenuActive(!menuActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }

    return (
        <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div 
                    className={styles.headerBurger}
                    onClick= {burgerMenuActive}
                    >
                        <span></span>
                    </div>
                    <div className={styles.headerSearch}>
                        <input type="text" placeholder='Search...'/>
                        <button type='submit'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <UserInfo 
                        userName={''}
                        avatarUrl={""}
                    />
                    <BurgerMenu authMenu={menuActive} onClick={handleClickAway}/>
                </div>
        </header>
    );
};

export default Header;