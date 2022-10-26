import React, { FC, FormEvent, MouseEventHandler, useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import styles from "./Header.module.scss"
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../constants/Routes';

const Header: FC = () => {

    const [menuActive, setMenuActive] = useState(false);

    const burgerMenuActive = () => setMenuActive(!menuActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }

    const [ searchQuery, setSearchQuery ] = useState( "" );

    const navigate = useNavigate();

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        console.log(formData);

        navigate( `${Routes.search}?search=${searchQuery}` );
    } ;

    return (
        <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div 
                        className={styles.headerBurger}
                        onClick= {burgerMenuActive}
                    >
                        <span></span>
                    </div>
                    <Search 
                        query={searchQuery} 
                        onSubmit={handleSearch}
                    />
                    <UserInfo 
                        userName={''}
                        avatarUrl={""}
                    />
                    <BurgerMenu 
                        authMenu={menuActive} 
                        onClick={handleClickAway}
                    />
                </div>
        </header>
    );
};

export default Header;